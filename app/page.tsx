import PortfolioPage from "@/components/portfolio/PortfolioPage";
import { loadYamlData } from "@/lib/dataLoader";
import { PortfolioData } from "@/lib/types";

export default function Home() {
  const portfolioData = loadYamlData<PortfolioData>("portfolio-content");
  return <PortfolioPage data={portfolioData} />;
}
