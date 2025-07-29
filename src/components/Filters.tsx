const FILTERS = [
  { key: "camera", label: "📷 Câmera" },
  { key: "performance", label: "🚀 Desempenho & Jogos" },
  { key: "battery", label: "🔋 Bateria & Carregamento" },
  { key: "cost", label: "💵 Custo-Benefício" },
  { key: "software", label: "✨ Software Limpo" },
  { key: "design", label: "🎨 Design & Inovação" },
  { key: "longevity", label: "⏳ Longevidade" },
  { key: "AI", label: "🤖 Inteligência Artificial" },
  { key: "ecosystem", label: "🌐 Ecossistema Integrado" },
];

interface FiltersProps {
  activeFilters: Set<string>;
  onFilterClick: (filter: string) => void;
}

const Filters = ({ activeFilters, onFilterClick }: FiltersProps) => {
  return (
    <section id="filters" className="mb-8 md:mb-12">
      <h2 className="text-xl font-semibold text-center mb-4">
        O que é mais importante para você?
      </h2>
      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-4 max-w-4xl mx-auto">
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => onFilterClick(key)}
            className={`filter-btn py-1.5 px-2.5 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm md:text-base font-medium whitespace-nowrap ${
              activeFilters.has(key) ? "active" : ""
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Filters;
