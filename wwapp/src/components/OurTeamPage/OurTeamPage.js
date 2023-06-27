import "./OurTeamPage.css"
import MaryBerryHOTTT from './TeamPhotos/MaryBerryHOTTT.jpg'
import HeadshotNick from './TeamPhotos/Headshot-Nick2.png'
import HeadshotKatie from './TeamPhotos/Headshot-Katie.png'
import HeadshotBianca from './TeamPhotos/Headshot-Bianca.png'
import HeadshotJason from './TeamPhotos/Headshot-Jason.png'
import HeadshotWill from './TeamPhotos/Headshot-Will.png'
import SpongeBob from './TeamPhotos/SpongeBob.jpg'

function OurTeamPage () {
    return (

<div className="AboutUsPage-contents">
<div className="AboutUs-upperbox">
    <title>Welcome to the Wise Wallet Kitchen Team page...</title>
    <h1>In this project we used...</h1>
    <p>number of Github commits</p>
    <p>the software we used</p>
    <p>the number of programmes we used</p>
    <p>the lines of code we produced</p>
    </div>


    <div className="AboutUs-lowerbox">

    <div class="row">
  <div class="column">
    <div class="card">
      <img src={HeadshotNick} alt="Nick" />
      <div class="container">
        <h2>Nick Valente</h2>
        <p class="title">Big Dogg &amp; Tech Support</p>
        <p>Electrician with a passion for mountain sports.</p>
        <p>nvalente.electrics@gmail.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={HeadshotBianca} alt="Bianca" />
      <div class="container">
        <h2>Bianca Buha</h2>
        <p class="title">The true mastermind</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={SpongeBob} alt="Tom" />
      <div class="container">
        <h2>Tom Swapp</h2>
        <p class="title">Delete Master & Top Critic</p>
        <p>The knower of all API knowledge and wild theories</p>
        <p>tomswapp@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>



  <div class="column">
    <div class="card">
      <img src={HeadshotKatie} alt="Katie" />
      <div class="container">
        <h2>Katie Smith</h2>
        <p class="title">CEO &amp; Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={HeadshotJason} alt="Jason" />
      <div class="container">
        <h2>Jason Donehue</h2>
        <p class="title">Chief Whip & big brain</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={HeadshotWill} alt="Will" />
      <div class="container">
        <h2>Will Browning</h2>
        <p class="title">Leader & freedom fighter</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>


        {/* <div className="OurTeam-contents">
            <div className="OurTeam-Box">
                <p>Katie</p>
            </div>
            <div className="OurTeam-Box">
                <p>Nick</p>
            </div>
            <div className="OurTeam-Box">
                <p>Tom</p>
            </div>
            <div className="OurTeam-Box">
                <p>Bianca</p>
            </div>
            <div className="OurTeam-Box">
                <p>Will</p>
            </div>
            <div className="OurTeam-Box">
                <p>Jason</p>
            </div>
        </div> */}
    </div>
</div>

    )
}

export default OurTeamPage