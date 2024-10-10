import { HomeSection } from "../components/LandingComponents/HomeSection";
import { ProductsSection } from "../components/LandingComponents/ProductsSection";
import { ExperienceSection } from "../components/LandingComponents/ExperienceSection";
import { SpecsSection } from "../components/LandingComponents/SpecsSection";
import { colors } from "../constants/Colors";


export default function HomePage () {

  return(
    <div
      className="relative p-0 m-auto flex flex-col items-center justify-center"
      style={{ backgroundColor: colors.transparent }}
    >
      <div id="home-section">
        <HomeSection/>
      </div>
      
      <div id="products-section">
        <ProductsSection/>
      </div>

      <div id="experience-section">
        <ExperienceSection/>
      </div>

      <div id="specs-section">
        <SpecsSection/>
      </div>
    </div>
  )
}