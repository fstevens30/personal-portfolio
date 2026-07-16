export type Position = [longitude: number, latitude: number];

type LineFeature = {
  type: "Feature";
  properties: { leg: number };
  geometry: {
    type: "LineString";
    coordinates: Position[];
  };
};

type JourneyFeatureCollection = {
  type: "FeatureCollection";
  features: LineFeature[];
};

function createArc(
  start: Position,
  end: Position,
  segments: number,
  direction: number,
): Position[] {
  const dx = end[0] - start[0];
  const dy = end[1] - start[1];
  const distance = Math.hypot(dx, dy);
  const offset = Math.min(distance * 0.22, 1.1) * direction;
  const control: Position = [
    (start[0] + end[0]) / 2 + (-dy / distance) * offset,
    (start[1] + end[1]) / 2 + (dx / distance) * offset,
  ];

  return Array.from({ length: segments }, (_, index) => {
    if (index === 0) return start;
    if (index === segments - 1) return end;

    const t = index / (segments - 1);
    const inverse = 1 - t;
    return [
      inverse * inverse * start[0] +
        2 * inverse * t * control[0] +
        t * t * end[0],
      inverse * inverse * start[1] +
        2 * inverse * t * control[1] +
        t * t * end[1],
    ];
  });
}

export function createJourneyArcs(
  points: Position[],
  segments = 25,
): JourneyFeatureCollection {
  if (points.length < 2) {
    return { type: "FeatureCollection", features: [] };
  }

  const safeSegments = Math.max(3, Math.floor(segments));
  return {
    type: "FeatureCollection",
    features: points.slice(0, -1).map((start, index) => ({
      type: "Feature",
      properties: { leg: index },
      geometry: {
        type: "LineString",
        coordinates: createArc(
          start,
          points[index + 1],
          safeSegments,
          index % 2 === 0 ? -1 : 1,
        ),
      },
    })),
  };
}

export function toLegacyRgb(value: string | ArrayLike<number>): string {
  if (typeof value !== "string") {
    return `rgb(${Math.round(value[0])}, ${Math.round(value[1])}, ${Math.round(value[2])})`;
  }

  const channels = value.match(
    /^rgba?\(\s*([\d.]+)(?:\s+|,\s*)([\d.]+)(?:\s+|,\s*)([\d.]+)/i,
  );
  if (!channels) {
    throw new Error(`Unsupported RGB colour: ${value}`);
  }

  return `rgb(${Math.round(Number(channels[1]))}, ${Math.round(Number(channels[2]))}, ${Math.round(Number(channels[3]))})`;
}
