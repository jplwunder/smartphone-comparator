import { useState, useEffect } from "react";
import { phoneData } from "./data/phoneData";
import Header from "./components/Header";
import Filters from "./components/Filters";
import BrandsGrid from "./components/BrandsGrid";
import DetailsView from "./components/DetailsView";
import PhoneModelsAnalysis from "./components/PhoneModelsAnalysis";

function App() {
  // states
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set());
  const [selectedBrandKey, setSelectedBrandKey] = useState<string | null>(null);
  const [detailsVisible, setDetailsVisible] = useState(false);

  // variables
  const selectedBrand = selectedBrandKey ? phoneData[selectedBrandKey] : null;

  // handlers
  interface FilterClickHandler {
    (filter: string): void;
  }

  interface BrandClickHandler {
    (key: string): void;
  }

  // functions
  const handleFilterClick: FilterClickHandler = (filter) => {
    setActiveFilters((prevFilters: Set<string>) => {
      const newFilters = new Set(prevFilters);
      if (newFilters.has(filter)) {
        newFilters.delete(filter);
      } else {
        newFilters.add(filter);
      }
      return newFilters;
    });
  };

  const handleBrandClick: BrandClickHandler = (key) => {
    setSelectedBrandKey(key);
    setDetailsVisible(true);
  };

  useEffect(() => {
    if (detailsVisible) {
      const detailsElement = document.getElementById("details-view");
      detailsElement?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [detailsVisible, selectedBrandKey]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Header />
      <Filters
        activeFilters={activeFilters}
        onFilterClick={handleFilterClick}
      />
      <BrandsGrid
        phoneData={phoneData}
        activeFilters={activeFilters}
        onBrandClick={handleBrandClick}
        selectedBrandKey={selectedBrandKey}
      />
      {detailsVisible && selectedBrand && <DetailsView brand={selectedBrand} />}
      {detailsVisible && selectedBrand && <PhoneModelsAnalysis brand={selectedBrand} />}
    </div>
  );
}

export default App;
