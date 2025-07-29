import { useState } from "react";
import { tabKeyToName, Brand } from "../data/phoneData";
import RadarChart from "./RadarChart";

interface DetailsViewProps {
  brand: Brand;
}

const DetailsView = ({ brand }: DetailsViewProps) => {
  const contentKeys = Object.keys(
    brand.content
  ) as (keyof typeof tabKeyToName)[];

  const [activeTab, setActiveTab] = useState<keyof typeof tabKeyToName>(
    contentKeys[0]
  );

  if (!brand) {
    return null;
  }

  return (
    <section
      id="details-view"
      className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="md:w-1/3">
          <h2
            id="brand-name"
            className="text-3xl font-bold mb-4 text-[#BF7245]"
          >
            {brand.name}
          </h2>
          <div className="chart-container">
            <RadarChart data={brand.ratings} />
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="border-b border-gray-200 mb-4">
            <nav
              id="tabs"
              className="overflow-x-auto scroll-smooth flex gap-4 md:gap-6 -mb-px"
            >
              {contentKeys.map((contentKey) => (
                <button
                  key={contentKey}
                  onClick={() => setActiveTab(contentKey)}
                  className={`tab-btn py-2 border-b-2 border-transparent text-gray-500 font-medium  ${
                    activeTab === contentKey ? "active" : ""
                  }`}
                >
                  {tabKeyToName[contentKey] || contentKey}
                </button>
              ))}
            </nav>
          </div>
          <div
            id="tab-content"
            dangerouslySetInnerHTML={{ __html: brand.content[activeTab] }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default DetailsView;
