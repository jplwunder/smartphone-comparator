import { useState, useMemo } from "react";
import { Brand, PhoneModel } from "../data/phoneData";
import PhoneDetailsDialog from "./PhoneDetailsDialog";

interface PhoneModelsAnalysisProps {
  brand: Brand;
}

const PhoneModelsAnalysis = ({ brand }: PhoneModelsAnalysisProps) => {
  const [sortBy, setSortBy] = useState<"price" | "name">("price");
  const [filterPriceRange, setFilterPriceRange] = useState<
    "all" | "budget" | "mid" | "premium"
  >("all");
  const [selectedPhone, setSelectedPhone] = useState<PhoneModel | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handlePhoneClick = (phone: PhoneModel) => {
    setSelectedPhone(phone);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedPhone(null);
  };

  const sortedAndFilteredModels = useMemo(() => {
    if (!brand.phone_models) return [];

    let filtered = [...brand.phone_models];

    // Filter by price range
    if (filterPriceRange !== "all") {
      filtered = filtered.filter((model) => {
        if (!model.price) return true; // Include models without price in all categories

        switch (filterPriceRange) {
          case "budget":
            return model.price <= 1500;
          case "mid":
            return model.price > 1500 && model.price <= 4000;
          case "premium":
            return model.price > 4000;
          default:
            return true;
        }
      });
    }

    // Sort by selected criteria
    filtered.sort((a, b) => {
      if (sortBy === "price") {
        // Put models without price at the end
        if (!a.price && !b.price) return 0;
        if (!a.price) return 1;
        if (!b.price) return -1;
        return a.price - b.price;
      } else {
        return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [brand.phone_models, sortBy, filterPriceRange]);

  const priceRangeStats = useMemo(() => {
    if (!brand.phone_models) return { budget: 0, mid: 0, premium: 0, total: 0 };

    const modelsWithPrice = brand.phone_models.filter((model) => model.price);

    return {
      budget: modelsWithPrice.filter((model) => model.price! <= 1500).length,
      mid: modelsWithPrice.filter(
        (model) => model.price! > 1500 && model.price! <= 4000
      ).length,
      premium: modelsWithPrice.filter((model) => model.price! > 4000).length,
      total: brand.phone_models.length,
    };
  }, [brand.phone_models]);

  const formatPrice = (price?: number) => {
    if (!price) return "Preço não disponível";
    return `R$ ${price.toLocaleString("pt-BR")}`;
  };

  const getPriceCategory = (price?: number) => {
    if (!price) return "N/A";
    if (price <= 1500) return "Econômico";
    if (price <= 4000) return "Intermediário";
    return "Premium";
  };

  const getPriceCategoryColor = (price?: number) => {
    if (!price) return "bg-gray-100 text-gray-600";
    if (price <= 1500) return "bg-green-100 text-green-700";
    if (price <= 4000) return "bg-blue-100 text-blue-700";
    return "bg-purple-100 text-purple-700";
  };

  if (!brand.phone_models || brand.phone_models.length === 0) {
    return (
      <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 mt-6">
        <h3 className="text-2xl font-bold mb-4 text-[#BF7245]">
          Análise de Modelos - {brand.name}
        </h3>
        <p className="text-gray-600">Nenhum modelo disponível para análise.</p>
      </section>
    );
  }

  return (
    <section className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 mt-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Header and Stats */}
        <div className="lg:w-1/3">
          <h3 className="text-2xl font-bold mb-4 text-[#BF7245]">
            Análise de Modelos - {brand.name}
          </h3>

          {/* Price Range Statistics */}
          <div className="bg-gray-50 p-4 rounded-xl mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">
              Distribuição por Faixa de Preço
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  Econômico (até R$ 1.500)
                </span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                  {priceRangeStats.budget}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  Intermediário (R$ 1.500 - R$ 4.000)
                </span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm font-medium">
                  {priceRangeStats.mid}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  Premium (acima de R$ 4.000)
                </span>
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-sm font-medium">
                  {priceRangeStats.premium}
                </span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between items-center font-semibold">
                  <span className="text-gray-800">Total de Modelos</span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {priceRangeStats.total}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ordenar por:
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "price" | "name")}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BF7245] focus:border-transparent"
              >
                <option value="price">Preço (menor para maior)</option>
                <option value="name">Nome (A-Z)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filtrar por faixa de preço:
              </label>
              <select
                value={filterPriceRange}
                onChange={(e) =>
                  setFilterPriceRange(
                    e.target.value as "all" | "budget" | "mid" | "premium"
                  )
                }
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BF7245] focus:border-transparent"
              >
                <option value="all">Todas as faixas</option>
                <option value="budget">Econômico (até R$ 1.500)</option>
                <option value="mid">Intermediário (R$ 1.500 - R$ 4.000)</option>
                <option value="premium">Premium (acima de R$ 4.000)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Models List */}
        <div className="lg:w-2/3">
          <div className="grid gap-4 max-h-[600px] overflow-y-auto pr-2">
            {sortedAndFilteredModels.map((model, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handlePhoneClick(model)}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Model Image */}
                  <div className="sm:w-24 sm:h-24 w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img
                      src={model.image_link}
                      alt={model.name}
                      className="w-full h-full object-contain rounded-lg"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'/%3E%3Cpolyline points='21,15 16,10 5,21'/%3E%3C/svg%3E";
                      }}
                    />
                  </div>

                  {/* Model Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {model.name}
                      </h4>
                      <div className="flex flex-col sm:items-end gap-1">
                        <span className="text-lg font-bold text-[#BF7245]">
                          {formatPrice(model.price)}
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getPriceCategoryColor(
                            model.price
                          )}`}
                        >
                          {getPriceCategory(model.price)}
                        </span>
                      </div>
                    </div>

                    {/* Model Description */}
                    <div
                      className="text-sm text-gray-600 line-clamp-3 prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: model.description }}
                    />

                    {/* Review Link */}
                    {model.reviews_links && model.reviews_links !== "#" && (
                      <div className="mt-3">
                        <a
                          href={model.reviews_links}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-[#BF7245] hover:text-[#9A5A3A] font-medium"
                        >
                          Ver ficha técnica completa
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedAndFilteredModels.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-500">
                Nenhum modelo encontrado para os filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Phone Details Dialog */}
      <PhoneDetailsDialog
        phone={selectedPhone}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </section>
  );
};

export default PhoneModelsAnalysis;
