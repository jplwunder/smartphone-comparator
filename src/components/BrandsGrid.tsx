import { PhoneData } from "../data/phoneData";

interface BrandsGridProps {
  phoneData: PhoneData;
  activeFilters: Set<string>;
  onBrandClick: (key: string) => void;
  selectedBrandKey: string | null;
}

const BrandsGrid = ({
  phoneData,
  activeFilters,
  onBrandClick,
  selectedBrandKey,
}: BrandsGridProps) => {
  return (
    <section id="brands" className="mb-8 md:mb-12">
      <h2 className="text-xl font-semibold text-center mb-4">
        Explore as Marcas
      </h2>
      <div
        id="brands-grid"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
      >
        {Object.keys(phoneData).map((key) => {
          const brand = phoneData[key];
          const hasActiveFilter =
            activeFilters.size === 0 ||
            brand.strengths.some((s) => activeFilters.has(s));

          const isDimmed = activeFilters.size > 0 && !hasActiveFilter;
          const isHighlighted = key === selectedBrandKey;

          const cardClasses = `brand-card cursor-pointer p-4 bg-white rounded-lg flex items-center justify-center h-24 text-center ${
            isDimmed ? "dimmed" : ""
          } ${isHighlighted ? "highlight" : ""}`;

          return (
            <div
              key={key}
              className={cardClasses}
              onClick={() => onBrandClick(key)}
            >
              <h3 className="font-bold text-gray-800 text-lg">{brand.logo}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BrandsGrid;
