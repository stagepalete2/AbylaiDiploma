import Banner from '@/app/components/Banner'
import DiscoverPublication from '@/app/components/DiscoverPublication'
import FooterNavbar from '@/app/components/FooterNavbar'
import IdeasThatMatter from '@/app/components/IdeasThatMatter'
import IgniteNextIdea from '@/app/components/IgniteNextIdea'
import Navbar from '@/app/components/Navbar'
import WhyConsensusSection from '@/app/components/WhyConsensusSection'

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className=''>
          <Banner />
          <WhyConsensusSection />
          <hr />
          <IdeasThatMatter />
          <hr />
          <DiscoverPublication />
          <hr />
          <IgniteNextIdea />
        </div>
      </main>
      <footer>
        <FooterNavbar />
      </footer>
    </>
  );
}
