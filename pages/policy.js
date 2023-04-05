import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Terms of Use And Privacy Policy
Terms of Use
Please make sure you accept the following terms before playing.
Online Multiplayer and In-Game Communication Terms
By entering Online Multiplayer you are accepting the following term: "I understand that my public IP address and approximate location is provided for the online service to connect with the game servers and players around the world".

"I understand that my in-game jersey name would be displayed in the online game rooms including race and chat rooms for all players to see, I understand that any sensitive data I typed in the 'Jersey name' field could be and would be seen by anyone.

By using the chat functionality you are accepting the following term: "I understand, that the chat is public and anyone can see the messages I'm sending within the chat window, I'm completely responsible for what information I make public from within the chat window for other people to see. I understand that the chat is not regulated and I'll have to be respectful to other people in the chat.

Actions Term
By accepting our terms you are fully responsible for any action you could or did from imitating any action from in-game.

Privacy policy
Please read the privacy policy carefully before playing.
Online Multiplayer and In-Game Communication Policy
We use Photon Cloud Services for multiplayer and chat functionality, Information like public IP addresses and approximate location and Lobby Names are used in order to let other players connect to you or vise-versa, we do not store the information they are temporary gathered while the host is enabled for players to join.

Advertisers And Third Party
Unity collects some or all of the following information about your device: unique device identifiers. 
Unity Ads collects device information, like IP address and device identifiers, and information regarding the delivery of ads and your interaction with them, all of which may be shared with ad publishers and attribution companies.

Any information obtained by Unity Ads is used for better ad placement based on your interest. You can read the privacy policy of Unity Ads here https://unity.com/legal/privacy-policy

Photon Multiplayer does not collect any of your personal data.

Rating
All games are rated by IARC and can be found on each game's storefront page. e.g Google Play</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
