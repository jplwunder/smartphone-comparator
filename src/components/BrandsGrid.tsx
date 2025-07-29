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

          // Count how many selected strengths this brand has
          const matchingStrengthsCount = brand.strengths.filter((strength) =>
            activeFilters.has(strength)
          ).length;

          const cardClasses = `brand-card cursor-pointer p-4 bg-white rounded-lg flex items-center justify-center h-24 text-center relative ${
            isDimmed ? "dimmed" : ""
          } ${isHighlighted ? "highlight" : ""}`;

          return (
            <div
              key={key}
              className={cardClasses}
              onClick={() => onBrandClick(key)}
            >
              <h3 className="font-bold text-gray-800 text-lg">{brand.logo}</h3>
              {activeFilters.size > 0 && matchingStrengthsCount > 0 && (
                <div
                  className="absolute -top-2 -right-2 text-white text-xs font-bold rounded w-12 h-6 flex items-center justify-center"
                  style={{ backgroundColor: "rgba(191, 114, 69, 1)" }}
                >
                  {`${matchingStrengthsCount} / ${activeFilters.size}`}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BrandsGrid;
