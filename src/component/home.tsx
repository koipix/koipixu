import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGithubAlt, 
  faXTwitter, 
  faItchIo, 
  faUnity, 
  faDiscord,
  faNodeJs,
  faRust,
  faPhp
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Home() {
    return (
      <>
        <section>
            <h1 className="text-white text-3xl font-medium">
                Nyallo! I'm
                <div className="mt-3 text-pink-200">
                    <span className="text-gray-400 text-lg">(ja) </span>
                    コイ
                    <br/>
                    <span className="text-gray-400 text-lg">(ch) </span>
                    鲤
                    <br/>
                    <span className="text-gray-400 text-lg">(en) </span>
                    Koi
                </div>
            </h1>
            <p className="text-2xl text-gray-200 mt-10 font-normal">
                Just a <span className="font-medium text-pink-200">UNIX</span> snob and aspiring student currently working on small projects as indie game dev and research, also draws stuff sometimes!
            </p>
            <div className='mt-15 flex justify-center'>
                <ul className='flex flex-row gap-x-10 text-5xl font-normal'>
                    <li className='flex flex-col'>
                        <a href="https://github.com/koipix" className='flex flex-col hover:text-pink-300'>
                            <FontAwesomeIcon icon={faGithubAlt}/>
                        </a>
                        <p className='text-xl mt-2'>Github</p>
                    </li>
                    <li className='flex flex-col'>
                    <a href="https://x.com/Koipixu" className='flex flex-col hover:text-pink-300'>
                            <FontAwesomeIcon icon={faXTwitter}/>
                        </a>
                        <p className='text-xl mt-2'>Twitter</p>
                    </li>
                    <li className='flex flex-col'>
                    <a href="https://koipix.itch.io/" className='flex flex-col hover:text-pink-300'>
                            <FontAwesomeIcon icon={faItchIo}/>
                        </a>
                        <p className='text-xl mt-2'>Itch.io</p>
                    </li>
                    <li className='flex flex-col'>
                    <a href="mailto:koi.devt@gmail.com" className='flex flex-col hover:text-pink-300'>
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </a>
                        <p className='text-xl mt-2'>Email</p>
                    </li>
                </ul>
            </div>
        </section>
        <section className="mt-15">
          <h1 className="text-3xl mb-5"> Projects </h1>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-mantle p-4 text-accent shadow-md transition-shadow">
              <dt className="flex justify-between items-center">
                <span className="underline underline-offset-3 hover:decoration-2">
                  <a href="https://koipix.itch.io/inevitable-fate" className="text-2xl text-pink-200">
                    Inevitable Fate
                  </a>
                </span>
                <FontAwesomeIcon icon={faUnity} className="text-3xl text-pink-200 mr-1"/>
              </dt>
              <dd className="mt-3 text-gray-200 text-lg font-normal">
                Our team's cute rougelite entry for Brackey's Game Jam, made with heart and a dash of chaos!
              </dd>
            </div>
            <div className="rounded-lg bg-mantle p-4 text-accent shadow-md transition-shadow">
              <dt className="flex justify-between items-center">
                <span className="underline underline-offset-3 hover:decoration-2">
                  <a href="https://github.com/koipix/Arona" className="text-2xl text-pink-200">
                    Arona
                  </a>
                </span>
                <span className="flex gap-x-2 mr-2">
                 <FontAwesomeIcon icon={faNodeJs} className="text-3xl text-pink-200"/>
                 <FontAwesomeIcon icon={faDiscord} className="text-3xl text-pink-200"/>
                </span>
              </dt>
              <dd className="mt-3 text-gray-200 text-lg font-normal">
                Arona is a flexible discord bot with fun features like minigames specially integrated with language model
              </dd>
            </div>
            <div className="rounded-lg bg-mantle p-4 text-accent shadow-md transition-shadow">
              <dt className="flex justify-between items-center">
                <span className="underline underline-offset-3 hover:decoration-2">
                  <a href="https://github.com/koipix/todo" className="text-2xl text-pink-200">
                    Todo
                  </a>
                </span>
                <FontAwesomeIcon icon={faRust} className="text-3xl text-pink-200 mr-1"/>
              </dt>
              <dd className="mt-3 text-gray-200 text-lg font-normal">
                A simple lightweight and fast todo cli program written in RUST for the sillies
              </dd>
            </div>
            <div className="rounded-lg bg-mantle p-4 text-accent shadow-md transition-shadow">
              <dt className="flex justify-between items-center">
                <span className="underline underline-offset-3 hover:decoration-2">
                  <a href="https://github.com/koipix/4cboard" className="text-2xl text-pink-200">
                    4cboard
                  </a>
                </span>
                 <FontAwesomeIcon icon={faPhp} className="text-4xl text-pink-200"/>
              </dt>
              <dd className="mt-3 text-gray-200 text-lg font-normal">
                A anonymous confession bulletin board inspired by 4chan's anonymity system for my university project
              </dd>
            </div>
          </dl>
        </section>
        {/* <section className="mt-15">
          <h1 className="text-3xl mb-5">Artworks</h1>
            <div className="carousel w-full sm:flex sm:flex-cols-2 sm:gap-6 sm:justify-center">
              <div id="slide1" className="carousel-item relative w-full sm:h-135 sm:w-100">
                <img className="w-full rounded-lg" src="/imgs/art-1.png"/>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between sm:hidden">
                  <a href="#slide4" className="btn btn-circle bg-pink-200 text-mantle p-5">❮</a>
                  <a href="#slide2" className="btn btn-circle bg-pink-200 text-mantle p-6">❯</a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full sm:h-135 sm:w-105">
                <img className="w-full rounded-lg" src="/imgs/art-2.png"/>
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between sm:hidden">
                  <a href="#slide1" className="btn btn-circle bg-pink-200 text-mantle p-5">❮</a>
                  <a href="#slide3" className="btn btn-circle bg-pink-200 text-mantle p-5">❯</a>
                </div>
              </div>
            </div>
        </section> */}
        <section className="mt-18">
          <h1 className="text-3xl mb-5">Pookies :3</h1>
          <div className="flex flex-wrap gap-4">
            <a>
              <img src="/pookies/jasussy.jpg" alt="jason" className="h-24 w-24 rounded-lg shadow-md"/>
            </a>
            <a>
              <img src="/pookies/elle.jpg" alt="elle" className="h-24 w-24 rounded-lg shadow-md"/>
            </a>
            <a>
              <img src="/pookies/shinya.jpg" alt="shinya" className="h-24 w-24 rounded-lg shadow-md"/>
            </a>
            <a>
              <img src="/pookies/shigemi.jpg" alt="shigemi" className="h-24 w-24 rounded-lg shadow-md"/>
            </a>
            <a>
              <img src="/pookies/kumi.jpg" alt="kumi" className="h-24 w-24 rounded-lg shadow-md"/>
            </a>
            <a>
              <img src="/pookies/alex.jpg" alt="alex" className="h-24 w-24 rounded-lg shadow-md"/>
            </a> 
          </div>
        </section>
      </>
    )
}

export default Home
