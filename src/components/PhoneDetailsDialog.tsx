import { PhoneModel } from "../data/phoneData";

interface PhoneDetailsDialogProps {
  phone: PhoneModel | null;
  isOpen: boolean;
  onClose: () => void;
}

const PhoneDetailsDialog = ({
  phone,
  isOpen,
  onClose,
}: PhoneDetailsDialogProps) => {
  if (!isOpen || !phone) return null;

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

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      tabIndex={-1}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              Detalhes do Smartphone
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Phone Image (fixed column) */}
            <div className="md:w-1/3 flex flex-col gap-4 md:sticky md:top-[104px] self-start">
              <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
                <img
                  src={phone.image_link}
                  alt={phone.name}
                  className="w-full h-full object-contain rounded-xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='1' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='3' width='18' height='18' rx='2' ry='2'/%3E%3Ccircle cx='8.5' cy='8.5' r='1.5'/%3E%3Cpolyline points='21,15 16,10 5,21'/%3E%3C/svg%3E";
                  }}
                />
              </div>
              {/* Review Link */}
              {phone.reviews_links && phone.reviews_links !== "#" && (
                <div className="pt-4 border-t border-gray-200">
                  <a
                    href={phone.reviews_links}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-[#BF7245] text-white rounded-lg hover:bg-[#9A5A3A] transition-colors font-medium"
                  >
                    Ver ficha técnica completa
                    <svg
                      className="w-4 h-4 ml-2"
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

            {/* Phone Details (scrollable column) */}
            <div className="md:w-2/3 max-h-[70vh] overflow-y-auto">
              <div className="space-y-4">
                {/* Name and Price */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {phone.name}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-2xl font-bold text-[#BF7245]">
                      {formatPrice(phone.price)}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getPriceCategoryColor(
                        phone.price
                      )}`}
                    >
                      {getPriceCategory(phone.price)}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Descrição Detalhada
                  </h4>
                  <div
                    className="text-gray-700 prose prose-sm max-w-none leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: phone.description }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetailsDialog;
