import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Flynn Stevens',
  description: 'A little more about me.'
}

export default function About () {
  return (
    <>
      <main>
        <header>
          <h1>About Me</h1>
        </header>
        =
        <div>
          <div>
            <h2>Education</h2>
            <p>
              I am a student at Ara Institute of Canterbury, studying a Bachelor
              of Information and Communication Technologies. I am in my second
              year and am on track to graduate in late 2025.
            </p>
            <p>
              I have previously studied at the Nelson Marlborough Institute of
              Technology where I gained my Diploma in Web Design and
              Development.
            </p>
            <p>
              I am currently working as a Duty Manager at a local liquor store.
              I also intern at a local startup, where I work on a mobile
              application.
            </p>
          </div>
          <div>
            <h2>Hobbies</h2>

            <p>
              In my spare time I enjoy writing code and playing with my kitten.
              I am a big sports fan and really enjoy basketball, rugby and
              football.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
