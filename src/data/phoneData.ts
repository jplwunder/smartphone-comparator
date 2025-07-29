export interface Brand {
  name: string;
  logo: string;
  strengths: string[];
  ratings: { [key: string]: number };
  content: { [key: string]: string };
  phone_models?: PhoneModel[];
}

export interface PhoneModel {
  name: string;
  image_link: string;
  reviews_links: string;
  description: string;
  price: number | undefined;
}

export interface PhoneData {
  [key: string]: Brand;
}

export const phoneData: PhoneData = {
  samsung: {
    name: "Samsung",
    logo: "SAMSUNG",
    strengths: [
      "camera",
      "design",
      "software",
      "longevity",
      "performance",
      "battery",
      "AI",
    ],
    ratings: {
      camera: 9,
      performance: 10,
      battery: 9,
      cost: 7,
      software: 8,
      design: 9,
      longevity: 10,
    },
    content: {
      overview: `<p class="text-gray-700">A <strong>Samsung</strong> é líder no mercado brasileiro de smartphones, oferecendo uma vasta gama de aparelhos, desde modelos de entrada e intermediários, como a linha <strong>Galaxy A</strong>, até os dispositivos topo de linha da série <strong>Galaxy S</strong> e os inovadores dobráveis <strong>Galaxy Z Fold</strong> e <strong>Z Flip</strong>. A marca é conhecida por sua <strong>qualidade premium</strong>, <strong>integração de IA</strong> e <strong>designs sofisticados</strong>.</p>`,
      cameras: `<p class="text-gray-700">Os celulares Samsung se destacam pela qualidade de suas câmeras. Modelos topo de linha como o <strong>Galaxy S25 Ultra</strong> apresentam uma impressionante câmera principal de 200 MP, acompanhada por lentes ultrawide e telefoto de alta resolução (50 MP e 10 MP, respectivamente), capazes de capturar detalhes impressionantes e cores naturais, mesmo em baixa luz. O <strong>Galaxy S24 Ultra</strong> também é reconhecido por sua câmera de 200 MP e por ser considerado o melhor celular top de linha em 2024. Os dispositivos intermediários, como o <strong>Galaxy A56</strong>, possuem uma câmera principal de 50 MP que entrega fotos com bom detalhamento e cores equilibradas, e o <strong>Galaxy A55</strong> oferece processamento aprimorado para fotos noturnas. Muitos modelos suportam gravação de vídeo em 4K e alguns flagships chegam a 8K.</p>`,
      software: `<p class="text-gray-700">A interface <strong>One UI</strong> da Samsung é elogiada por seus recursos de personalização e multitarefas. A marca tem investido pesadamente em <strong>Inteligência Artificial (IA) com o Galaxy AI</strong>, que oferece funcionalidades como busca inteligente por imagem, voz ou texto, tradução simultânea em chamadas, e ferramentas avançadas de edição de fotos e vídeos.</p>`,
      longevity: `<p class="text-gray-700">A Samsung demonstrou um compromisso significativo com a longevidade de seus aparelhos. Os modelos premium da linha Galaxy S25 (incluindo S25 Ultra, S25+ e os dobráveis Z Flip 7 e Z Fold 7) contam com uma garantia de <strong>sete anos de atualizações de software</strong>, abrangendo tanto as grandes atualizações do Android quanto os patches de segurança. Mesmo em modelos intermediários como o <strong>Galaxy A16</strong>, a Samsung promete atualizações de sistema até 2030, e o <strong>Galaxy A56</strong> oferece seis anos de atualizações. Em termos de hardware, os flagships da Samsung utilizam <strong>materiais robustos como titânio (S24/S25 Ultra) e vidro Gorilla Armor 2 (S25 Ultra)</strong>, e muitos possuem <strong>certificação IP68</strong> para resistência à água e poeira. Modelos da linha A, como o <strong>A55 e A56</strong>, contam com <strong>IP67</strong>, e o A16 tem IP54. Os dobráveis também tiveram melhorias na resistência da dobradiça e na construção geral.</p>`,
      design: `<p class="text-gray-700">Design premium com <strong>laterais planas</strong> e <strong>cantos arredondados</strong>, alguns com acabamento em <strong>titânio</strong> (<strong>S24 Ultra</strong>, <strong>S25 Ultra</strong>). Os modelos dobráveis, como o <strong>Galaxy Z Fold 6</strong> e <strong>Z Flip 6/7</strong>, possuem <strong>telas internas amplas</strong> e design que favorece a <strong>multitarefa</strong>.</p>`,
      performance: `<p class="text-gray-700">Os smartphones Samsung são equipados com processadores poderosos, como o <strong>Snapdragon 8 Elite (Gen 3) For Galaxy</strong> nos modelos Ultra ou o <strong>Exynos 1580</strong> nos intermediários como o Galaxy A56. Essa combinação de hardware e software garante <strong>desempenho excepcional em multitarefas, jogos pesados e uso de recursos de IA</strong>.</p>`,
      battery_charging: `<p class="text-gray-700">A autonomia da bateria é geralmente boa, com modelos como o S25 Ultra e o Galaxy A56/A55 com 5.000 mAh que duram o dia todo com uso moderado. Muitos modelos suportam <strong>carregamento rápido de 25W a 45W</strong>, embora alguns intermediários venham com carregadores mais lentos na caixa. O S25 Ultra e S25+ também oferecem carregamento sem fio e reverso.</p>`,
      // cost: `<p class="text-gray-700">A linha <strong>Galaxy S</strong>, especialmente os modelos <strong>Ultra</strong> e <strong>Fold</strong>, são considerados caros e premium. No entanto, a Samsung também oferece opções com <strong>ótimo custo-benefício</strong>, principalmente nas linhas <strong>A</strong> e <strong>FE</strong>, que trazem muitos recursos premium a preços mais acessíveis. O <strong>Galaxy A55</strong> foi considerado o <strong>melhor celular custo-benefício em 2024</strong>.</p>`,
    },
    phone_models: [
      // Samsung
      {
        name: "Samsung Galaxy S25 Ultra",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/samsung/galaxy_S25_ultra.avif", // Placeholder image
        reviews_links:
          "https://www.tudocelular.com/Samsung/fichas-tecnicas/n10692/Samsung-Galaxy-S25-Ultra.html",
        description: `<p class="text-gray-700">
        <strong>Samsung Galaxy S25 Ultra</strong> é considerado o <strong>melhor Android disponível no Brasil em 2025</strong>, destacando-se como um verdadeiro gigante no mundo dos smartphones.
      </p>
      <ul class="list-disc ml-6 text-gray-700">
        <li>
          <strong>Design:</strong> Mais leve e ergonômico, com estrutura em titânio e vidro Gorilla Armor 2 para durabilidade superior e menos reflexos.
        </li>
        <li>
          <strong>Tela:</strong> Dynamic LTPO AMOLED 2X de 6.9" com resolução QHD+ (3120x1440), taxa de atualização de 120Hz, cores vivas e brilho intenso de até 2600 nits.
        </li>
        <li>
          <strong>Desempenho:</strong> Processador Snapdragon 8 Elite e 12GB de RAM, proporcionando performance excepcional para multitarefas pesadas e jogos.
        </li>
        <li>
          <strong>Câmeras:</strong> Conjunto quádruplo com principal de 200 MP, ultrawide de 50 MP, telefoto de 50 MP (zoom óptico de 5x) e telefoto de 10 MP (zoom óptico de 3x). Destaque para fotografia no Android.
        </li>
        <li>
          <strong>Bateria:</strong> 5.000 mAh, dura cerca de um dia de uso moderado e pode chegar a quase 40 horas de autonomia. Carregamento rápido de 45W.
        </li>
        <li>
          <strong>Recursos:</strong> Integra Galaxy AI e promete 7 anos de atualizações de software, garantindo longevidade.
        </li>
      </ul>`,
        price: 6984, // From [1]
      },
      {
        name: "Samsung Galaxy S24 Ultra",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/samsung/galaxy_S24_ultra.jpg", // Placeholder image
        reviews_links:
          "https://www.tudocelular.com/Samsung/fichas-tecnicas/n10692/Samsung-Galaxy-S24-Ultra.html",
        description: `<p class="text-gray-700">
          O <strong>Samsung Galaxy S24 Ultra</strong>, um dos principais lançamentos de 2024, continua sendo uma <strong>excelente opção em 2025</strong> devido à sua performance e valor. Possui <strong>construção robusta em titânio</strong> com design único e vidro frontal que <strong>reduz bastante os reflexos</strong>. 
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
        <strong>Tela:</strong> LTPO AMOLED de 6.8" com <strong>120Hz</strong> de taxa de atualização e resolução Quad HD+, brilho forte e <strong>som estéreo potente e imersivo</strong>.
          </li>
          <li>
        <strong>Desempenho:</strong> Equipado com o processador <strong>Snapdragon 8 Gen 3</strong> e <strong>12GB de RAM</strong>, garante desempenho ágil para qualquer aplicativo ou jogo.
          </li>
          <li>
        <strong>Câmeras:</strong> Conjunto fotográfico completo: <strong>principal de 200MP</strong>, <strong>ultrawide de 12MP</strong>, <strong>telefoto de 10MP (3x óptico)</strong> e <strong>periscópica de 50MP (5x óptico)</strong>.
          </li>
          <li>
        <strong>Bateria:</strong> 5.000 mAh, proporciona até <strong>34 horas de autonomia</strong>.
          </li>
          <li>
        <strong>Recursos:</strong> Inclui <strong>S Pen com Bluetooth</strong>, <strong>recursos Galaxy AI</strong>, <strong>7 anos de atualizações de software</strong>, <strong>carregamento sem fio e reverso</strong> e <strong>certificação IP68</strong>.
          </li>
        </ul>`,
        price: 5129,
      },
      {
        name: "Samsung Galaxy S25+",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/samsung/galaxy_S25_plus.webp", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          O <strong>Samsung Galaxy S25+</strong> é um "intermediário de ponta" da linha Galaxy S25, oferecendo muitos recursos avançados.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
        <strong>Tela:</strong> Super AMOLED QHD (3120x1440) de 6.7" com <strong>120Hz</strong> de taxa de atualização.
          </li>
          <li>
        <strong>Desempenho:</strong> Processador <strong>Qualcomm Snapdragon 8 Gen 3 for Galaxy</strong> e <strong>12GB de RAM</strong> para desempenho rápido.
          </li>
          <li>
        <strong>Câmeras:</strong> Triplo: <strong>principal de 50 MP</strong>, <strong>ultrawide de 12 MP</strong> e <strong>telefoto de 10 MP</strong>.
          </li>
          <li>
        <strong>Bateria:</strong> 4.900 mAh com <strong>carregamento super rápido de 45W</strong>.
          </li>
          <li>
        <strong>Recursos:</strong> <strong>Galaxy AI</strong>, <strong>certificação IP68</strong> e <strong>7 anos de atualizações de software</strong>.
          </li>
        </ul>`,
        price: 5500,
      },
      {
        name: "Samsung Galaxy S24+",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/samsung/galaxy_S24_plus.jpg", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          O <strong>Samsung Galaxy S24+</strong> é um celular topo de linha ideal para <strong>fotografia e criadores de conteúdo</strong>.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
        <strong>Tela:</strong> Dynamic AMOLED 2x de 6.7" com <strong>120Hz</strong> e resolução Quad HD+ (3120x1440p).
          </li>
          <li>
        <strong>Desempenho:</strong> Processador <strong>Samsung Exynos 2400</strong> e <strong>12GB de RAM</strong> para excelente performance.
          </li>
          <li>
        <strong>Câmeras:</strong> Avançadas: <strong>principal de 50MP</strong>, <strong>ultrawide de 12MP</strong> e <strong>teleobjetiva de 10MP</strong>. Grava vídeos em <strong>8K a 30fps</strong> e <strong>4K a 60fps</strong> na frontal.
          </li>
          <li>
        <strong>Bateria:</strong> 4.900 mAh com autonomia de até 16 horas de tela ativa.
          </li>
          <li>
        <strong>Recursos:</strong> <strong>IP68</strong>, <strong>Gorilla Glass Victus 2</strong>, <strong>IA exclusiva</strong> e <strong>atualizações até o Android 21</strong>.
          </li>
        </ul>`,
        price: 3734,
      },
      {
        name: "Samsung Galaxy Z Fold 6",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/samsung/galaxy_zfold_6.jpg", // Placeholder image
        reviews_links:
          "https://www.tudocelular.com/Samsung/fichas-tecnicas/n10692/Samsung-Galaxy-Z-Fold-6.html",
        description: `<p class="text-gray-700">
          O <strong>Samsung Galaxy Z Fold 6</strong> é o <strong>melhor celular dobrável</strong> do mercado, funcionando como um verdadeiro produto <strong>2 em 1 (tablet e celular)</strong>.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
        <strong>Tela:</strong> Interna de 7.6" Dynamic AMOLED 2X e externa de 6.3" Super AMOLED, ambas com <strong>120Hz</strong> e brilho forte.
          </li>
          <li>
        <strong>Design:</strong> Moderno, dobradiça resistente e corpo fino, ideal para multitarefas.
          </li>
          <li>
        <strong>Desempenho:</strong> <strong>Snapdragon 8 Gen 3</strong> e <strong>12GB de RAM</strong>.
          </li>
          <li>
        <strong>Câmeras:</strong> <strong>Principal de 50 MP</strong>, <strong>ultrawide de 12 MP</strong> e <strong>teleobjetiva de 10 MP</strong>.
          </li>
          <li>
        <strong>Bateria:</strong> 4.400 mAh, autonomia de até 29 horas de uso moderado.
          </li>
          <li>
        <strong>Recursos:</strong> Suporte a <strong>S Pen</strong>, <strong>Galaxy AI</strong> e <strong>resistência à água (IPX8)</strong>.
          </li>
        </ul>`,
        price: 6299,
      },
      {
        name: "Samsung Galaxy Z Flip 6",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/samsung/galaxy_zflip_6.png", // Placeholder image
        reviews_links:
          "https://www.tudocelular.com/Samsung/fichas-tecnicas/n10692/Samsung-Galaxy-Z-Flip-6.html",
        description: `<p class="text-gray-700">
          O <strong>Samsung Galaxy Z Flip 6</strong> é a melhor opção para quem busca um <strong>celular dobrável compacto</strong>.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
        <strong>Tela:</strong> Dobrável LTPO AMOLED de 6.7" Full HD+ com <strong>120Hz</strong> e tela externa de 3.4".
          </li>
          <li>
        <strong>Desempenho:</strong> <strong>Snapdragon 8 Gen 3</strong> e <strong>12GB de RAM</strong>.
          </li>
          <li>
        <strong>Câmeras:</strong> <strong>Principal de 50 MP</strong> e frontal de 50 MP, qualidade similar ao S24.
          </li>
          <li>
        <strong>Bateria:</strong> 4.000 mAh, autonomia de até 28 horas.
          </li>
          <li>
        <strong>Recursos:</strong> <strong>Galaxy AI</strong>, <strong>suporte de software prolongado</strong> e estrutura reforçada.
          </li>
        </ul>`,
        price: 3329,
      },
      {
        name: "Samsung Galaxy A55 5G",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/samsung/galaxy_A55.webp", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          O <strong>Samsung Galaxy A55 5G</strong> é um dos <strong>melhores celulares custo-benefício</strong> da Samsung em 2025, oferecendo experiência premium a preço de intermediário.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
        <strong>Design:</strong> Construção em vidro e <strong>IP67</strong> contra areia, poeira e respingos d’água.
          </li>
          <li>
        <strong>Tela:</strong> Super AMOLED de 6.6" Full HD+ com <strong>120Hz</strong>.
          </li>
          <li>
        <strong>Desempenho:</strong> <strong>Exynos 1480</strong> com <strong>8GB de RAM</strong>.
          </li>
          <li>
        <strong>Câmeras:</strong> <strong>50MP principal</strong>, <strong>12MP ultrawide</strong>, <strong>5MP macro</strong>, com processamento aprimorado.
          </li>
          <li>
        <strong>Bateria:</strong> 5.000 mAh, dura um dia inteiro.
          </li>
          <li>
        <strong>Recursos:</strong> <strong>NFC</strong>, <strong>5G</strong>.
          </li>
        </ul>`,
        price: 2159,
      },
      {
        name: "Samsung Galaxy A56 5G",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/samsung/galaxy_A56.jpg", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          O <strong>Samsung Galaxy A56 5G</strong> é um <strong>intermediário premium equilibrado</strong> para 2025.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
        <strong>Tela:</strong> Super AMOLED de 6.7" com <strong>120Hz</strong> e brilho aprimorado.
          </li>
          <li>
        <strong>Desempenho:</strong> <strong>Samsung Exynos 1580</strong> com <strong>8GB ou 12GB de RAM</strong>.
          </li>
          <li>
        <strong>Câmeras:</strong> <strong>50MP principal</strong>, <strong>12MP ultrawide</strong>, <strong>5MP macro</strong>, melhorias em retratos.
          </li>
          <li>
        <strong>Bateria:</strong> 5.000 mAh, até 30 horas de uso moderado.
          </li>
          <li>
        <strong>Recursos:</strong> <strong>IP67</strong>, <strong>IA</strong> e <strong>6 anos de atualizações de software</strong>.
          </li>
        </ul>`,
        price: 2199,
      },
      {
        name: "Samsung Galaxy A36 5G",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/samsung/galaxy_A36.avif", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          O <strong>Samsung Galaxy A36 5G</strong> é ideal para quem busca <strong>bom desempenho e preço acessível</strong>.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
        <strong>Tela:</strong> Super AMOLED de 6.7" com <strong>120Hz</strong>.
          </li>
          <li>
        <strong>Desempenho:</strong> <strong>Qualcomm Snapdragon 6 Gen 3</strong> com <strong>6GB ou 12GB de RAM</strong>.
          </li>
          <li>
        <strong>Câmera:</strong> Principal de 50 MP, fotos nítidas durante o dia.
          </li>
          <li>
        <strong>Bateria:</strong> 5.000 mAh, dura o dia todo.
          </li>
          <li>
        <strong>Recursos:</strong> <strong>IA</strong>.
          </li>
        </ul>`,
        price: 1699,
      },
      {
        name: "Samsung Galaxy A06",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/samsung/galaxy_A06.jpg", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          O <strong>Samsung Galaxy A06</strong> é um modelo básico e acessível dentro do portfólio da Samsung.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
        <strong>Tela:</strong> LCD de 6.7" com resolução de 720x1600 pixels.
          </li>
          <li>
        <strong>Desempenho:</strong> <strong>MediaTek Helio G85</strong> com <strong>4GB de RAM</strong> e <strong>128GB de armazenamento</strong>.
          </li>
          <li>
        <strong>Câmeras:</strong> Principal de 50 MP e sensor secundário de 2 MP.
          </li>
          <li>
        <strong>Bateria:</strong> 5.000 mAh, suficiente para uso básico diário.
          </li>
        </ul>`,
        price: 699,
      },
      {
        name: "Samsung Galaxy A16 5G",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/samsung/galaxy_A16.webp", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          O <strong>Samsung Galaxy A16 5G</strong> é uma das melhores opções de celular 5G na faixa de R$ 1.000 para fãs da Samsung.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
        <strong>Acabamento:</strong> <strong>IP54</strong> contra respingos e poeira, suporte a <strong>NFC</strong>.
          </li>
          <li>
        <strong>Tela:</strong> Super AMOLED de 6.7" Full HD+ com <strong>90 Hz</strong>.
          </li>
          <li>
        <strong>Desempenho:</strong> <strong>Exynos 1330</strong> (ou Dimensity 6100 Plus) com <strong>4GB de RAM</strong> (expansível) e <strong>128GB de armazenamento</strong>.
          </li>
          <li>
        <strong>Bateria:</strong> 5.000 mAh, uso por um dia.
          </li>
          <li>
        <strong>Câmera:</strong> Principal de 50 MP, grava em Full HD.
          </li>
          <li>
        <strong>Recursos:</strong> <strong>Atualizações de sistema até 2030</strong>, <strong>One UI</strong>.
          </li>
        </ul>`,
        price: 900,
      },
      {
        name: "Samsung Galaxy S25 5G",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/samsung/galaxy_S25.avif", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          O <strong>Samsung Galaxy S25 5G</strong> é um celular topo de linha que oferece <strong>melhor desempenho e processamento</strong> em relação ao seu antecessor.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
        <strong>Tela:</strong> AMOLED Dinâmico 2X de 6.2" com <strong>120 Hz</strong>.
          </li>
          <li>
        <strong>Desempenho:</strong> <strong>Snapdragon 8 Elite for Galaxy (3nm)</strong>, <strong>12GB de RAM</strong> e <strong>256GB de armazenamento</strong>.
          </li>
          <li>
        <strong>Câmeras:</strong> Tripla: <strong>50 MP</strong>, <strong>12 MP</strong> e <strong>10 MP</strong>, ótimos vídeos e fotos.
          </li>
          <li>
        <strong>Bateria:</strong> 4.000 mAh, carregamento super rápido de 25W.
          </li>
          <li>
        <strong>Recursos:</strong> <strong>IP68</strong>, <strong>Galaxy AI</strong>, <strong>7 anos de atualizações de software</strong>.
          </li>
        </ul>`,
        price: 4840,
      },
      {
        name: "Samsung Galaxy S24 FE",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/samsung/galaxy_S24FE.webp", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          O <strong>Samsung Galaxy S24 FE (Fan Edition)</strong> é um <strong>top de linha</strong> dentro da série Galaxy S e considerado uma <strong>opção de ótimo custo-benefício</strong>. Geralmente custa em torno de <strong>R$ 2.500</strong>, podendo ser encontrado por <strong>R$ 2.699 na versão de 128 GB</strong>, sendo uma escolha única e recomendada na faixa de R$ 2.000 a R$ 3.000, especialmente em promoções.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
        <strong>Construção:</strong> Premium em vidro e metal, <strong>IP68</strong> para resistência à água e poeira.
          </li>
          <li>
        <strong>Tela:</strong> Dynamic AMOLED de 6.7" com resolução Quad HD+ (3120x1440p) e <strong>120 Hz</strong> de taxa de atualização, brilho de até <strong>2600 nits</strong>.
          </li>
          <li>
        <strong>Desempenho:</strong> <strong>Samsung Exynos 2400</strong>, <strong>8 GB de RAM</strong>, opções de <strong>256 GB ou 512 GB</strong> de armazenamento. Pontuação de <strong>1.600.000 no AnTuTu</strong>, desempenho comparável a flagships.
          </li>
          <li>
        <strong>Câmeras:</strong> Traseira tripla: <strong>50 MP principal</strong>, <strong>12 MP ultra-wide</strong>, <strong>8 MP telefoto</strong>. Frontal de <strong>10 MP</strong>. Grava <strong>4K a 60 fps</strong> (frontal e traseira) e <strong>8K a 24 fps</strong> (traseira).
          </li>
          <li>
        <strong>Bateria:</strong> <strong>4700 mAh</strong> com carregamento rápido.
          </li>
          <li>
        <strong>Recursos:</strong> <strong>7 anos de atualizações de software</strong>, <strong>Galaxy AI</strong> em constante evolução, funcionalidades avançadas e garantia de updates superior à maioria dos concorrentes.
          </li>
        </ul>`,
        price: 2699,
      },
    ],
  },
  apple: {
    name: "Apple",
    logo: "APPLE",
    strengths: [
      "camera",
      "performance",
      "software",
      "design",
      "longevity",
      "ecosystem",
    ],
    ratings: {
      camera: 10,
      performance: 10,
      battery: 8,
      cost: 7,
      software: 9,
      design: 9,
      longevity: 9,
    },
    content: {
      overview: `<p class="text-gray-700">A <strong>Apple</strong>, com seus <strong>iPhones</strong>, domina o segmento premium do mercado de smartphones. Os iPhones são reconhecidos por seu <strong>desempenho excepcional</strong>, <strong>câmeras de alta qualidade</strong> e <strong>design elegante</strong>. A marca oferece uma <strong>experiência de usuário fluida</strong> e um <strong>ecossistema integrado</strong>.</p>`,
      cameras: `<p class="text-gray-700">Os iPhones possuem câmeras de altíssima qualidade. O <strong>iPhone 16 Pro Max</strong> conta com uma câmera principal de 48 MP e uma ultrawide também de 48 MP, sendo a primeira vez em um iPhone, além de uma teleobjetiva de 12 MP com zoom óptico de 5x. Ele é especialmente notável pela <strong>qualidade profissional de gravação de vídeo em 4K HDR com Dolby Vision e estabilização avançada</strong>. O <strong>iPhone 16</strong> padrão também oferece uma câmera wide de 48 MP e ultrawide de 12 MP, com melhorias na nitidez e clareza graças à abertura e estabilização óptica. O <strong>iPhone 16e</strong> e o <strong>iPhone 15</strong> possuem câmeras de 48 MP que se destacam pelo processamento de imagem e captura de detalhes.</p>`,
      software: `<p class="text-gray-700">O sistema operacional <strong>iOS</strong> é conhecido por sua fluidez, otimização e experiência de usuário consistente. A Apple tem introduzido o <strong>Apple Intelligence</strong> para aprimorar a experiência do usuário, embora alguns recursos de IA ainda estejam em desenvolvimento ou não tão completos quanto os da concorrência no lançamento.</p>`,
      longevity: `<p class="text-gray-700">A Apple é referência em longevidade de software. Embora não especifique um número exato de anos, os iPhones tradicionalmente recebem <strong>cinco a seis anos de grandes atualizações do iOS e ainda mais tempo para atualizações de segurança</strong>. Em termos de durabilidade física, os iPhones, como o <strong>iPhone 16 Pro Max</strong>, apresentam um <strong>design premium com chassi de titânio e Ceramic Shield</strong>, garantindo maior resistência a impactos. Muitos modelos, incluindo o iPhone 15 e 16e, possuem <strong>certificação IP68</strong> para resistência à água e poeira, permitindo submersão em até 6 metros por 30 minutos.</p>`,
      design: `<p class="text-gray-700">Design premium e elegante, com laterais em <strong>titânio</strong> (<strong>iPhone 15 Pro Max</strong>, <strong>iPhone 16 Pro Max</strong>) e traseira em vidro. Modelos recentes como o <strong>iPhone 16 Pro Max</strong> reduziram as <strong>bordas da tela</strong>, otimizando o <strong>aproveitamento frontal</strong>.</p>`,
      performance: `<p class="text-gray-700">Os iPhones são equipados com chips da série A (como o <strong>A18 Pro no iPhone 16 Pro Max</strong> e <strong>A18 Bionic no iPhone 16e/16</strong>), que oferecem <strong>desempenho de ponta, superando facilmente concorrentes Android na mesma faixa de preço</strong>. Isso garante fluidez em multitarefas, edição de vídeos em 4K e jogos de console.</p>`,
      battery_charging: `<p class="text-gray-700">A bateria do <strong>iPhone 16 Pro Max</strong> oferece até 34 horas de uso moderado em testes padronizados, sendo a melhor bateria em um iPhone já testada. O <strong>iPhone 16e</strong> promete até 26 horas de reprodução de vídeo. A recarga rápida permite carregar até 50% em 30 minutos. No entanto, a capacidade nominal da bateria pode ser menor que a de alguns rivais Android, e o carregador é vendido separadamente para muitos modelos.</p>`,
    },
    phone_models: [
      // Apple
      {
        name: "Apple iPhone 16 Pro Max",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/apple/iphone_16_pro_max.jpg", // Placeholder image
        reviews_links:
          "https://www.tudocelular.com/Apple/fichas-tecnicas/n10692/Apple-iPhone-16-Pro-Max.html",
        description: `<p class="text-gray-700">
        <strong>Apple iPhone 16 Pro Max</strong> é o <strong>melhor celular da Apple em 2025</strong>, ideal para quem busca a experiência iOS mais completa.
      </p>
      <ul class="list-disc ml-6 text-gray-700">
        <li>
          <strong>Design:</strong> Premium em titânio, acabamento sofisticado e resistente.
        </li>
        <li>
          <strong>Tela:</strong> Super Retina XDR OLED de 6.9" com tecnologia ProMotion (<strong>120Hz adaptativos</strong>) e suporte a Dolby Vision.
        </li>
        <li>
          <strong>Desempenho:</strong> Chip <strong>A18 Pro</strong> e <strong>8GB de RAM</strong>, desempenho excepcional para jogos e multitarefas.
        </li>
        <li>
          <strong>Câmeras:</strong> Sistema de altíssima qualidade com principal de 48MP (captura mais luz), ultrawide de 48MP e teleobjetiva de 12MP (5x óptico). Filmadora grava em <strong>4K a 120fps</strong>.
        </li>
        <li>
          <strong>Bateria:</strong> 4.685 mAh, até 34 horas de uso moderado.
        </li>
        <li>
          <strong>Recursos:</strong> Botão de Ação personalizável, compatível com <strong>Apple Intelligence</strong>.
        </li>
        <li>
          <strong>Observação:</strong> Carregador vendido separadamente.
        </li>
      </ul>`,
        price: 7705,
      },
      {
        name: "Apple iPhone 16",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/apple/iphone_16.jpg", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          O <strong>Apple iPhone 16</strong> é considerado o <strong>melhor smartphone geral</strong>, sendo um update agradável à fórmula vencedora da Apple.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Tela:</strong> Super Retina XDR OLED de 6.1 polegadas Full HD+ com taxa de atualização de <strong>60Hz</strong>.
          </li>
          <li>
            <strong>Desempenho:</strong> Processador <strong>A18</strong>, até 30% mais rápido que o A16 do iPhone 15, oferecendo <strong>excelente desempenho</strong>.
          </li>
          <li>
            <strong>Câmeras:</strong> Wide de 48 MP e ultrawide de 12 MP, com melhorias na abertura e estabilização óptica para registros mais detalhados e nítidos.
          </li>
          <li>
            <strong>Bateria:</strong> 3.561 mAh com duração elogiada e carregamento rápido.
          </li>
          <li>
            <strong>Design:</strong> Acabamento premium e sofisticado.
          </li>
          <li>
            <strong>Observações:</strong> Não possui Apple Intelligence no lançamento. O zoom pode deixar a desejar e há relatos de aquecimento durante o carregamento.
          </li>
        </ul>`,
        price: 5129, // From [79, 81]
      },
      {
        name: "Apple iPhone 16e",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/apple/iphone_16e.jpg", // Placeholder image
        reviews_links:
          "https://www.tudocelular.com/Apple/fichas-tecnicas/n10692/Apple-iPhone-16e.html",
        description: `<p class="text-gray-700">
          O <strong>Apple iPhone 16e</strong> é a <strong>melhor opção acessível</strong> para quem deseja entrar no ecossistema Apple, sendo o modelo mais em conta da linha 16.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Tela:</strong> Super Retina XDR OLED de 6.1 polegadas com excelente qualidade de cores e contraste, mantendo <strong>taxa de atualização de 60Hz</strong>.
          </li>
          <li>
            <strong>Desempenho:</strong> Processador <strong>A18 Bionic</strong>, o mesmo dos modelos Pro, garantindo <strong>performance de topo de linha</strong>.
          </li>
          <li>
            <strong>Câmeras:</strong> <strong>Única câmera traseira de 48MP</strong> que surpreende pela versatilidade e captura de detalhes.
          </li>
          <li>
            <strong>Bateria:</strong> 3.961 mAh com até 26 horas de reprodução de vídeo e mais de 30 horas em testes práticos.
          </li>
          <li>
            <strong>Recursos:</strong> <strong>IP68</strong> resistente a respingos, água e poeira, compatível com <strong>Apple Intelligence</strong>.
          </li>
          <li>
            <strong>Observação:</strong> Carregador vendido separadamente.
          </li>
        </ul>`,
        price: 3788, // From [87]
      },
      {
        name: "Apple iPhone 16 Plus",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/apple/iphone_16_plus.webp", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          O <strong>Apple iPhone 16 Plus</strong> é o "ponto ideal" da linha de 2024 da Apple, destacando-se pela <strong>maior duração de bateria</strong> entre os iPhones testados.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Tela:</strong> Ampla Super Retina XDR de 6.3 polegadas com excelente qualidade visual.
          </li>
          <li>
            <strong>Desempenho:</strong> Processador <strong>A18 Pro</strong> oferecendo <strong>desempenho suave</strong> e ágil.
          </li>
          <li>
            <strong>Câmeras:</strong> Principal de 48MP, ultrawide de 48MP e telefoto de 12MP com zoom óptico de 5x, além de <strong>Botão de Controle de Câmera</strong> útil.
          </li>
          <li>
            <strong>Bateria:</strong> Excelente duração, ideal para quem busca <strong>longevidade</strong> sem recargas frequentes.
          </li>
          <li>
            <strong>Recursos:</strong> iPhone de tela grande com preço mais acessível comparado aos modelos Pro.
          </li>
          <li>
            <strong>Limitações:</strong> Não possui 120Hz de taxa de atualização e a IA estava incompleta no lançamento.
          </li>
        </ul>`,
        price: 6600,
      },
      {
        name: "Apple iPhone 15",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/apple/iphone_15.jpg", // Placeholder image
        reviews_links:
          "https://www.techtudo.com.br/review/iphone-15-review.html",
        description: `<p class="text-gray-700">
          O <strong>Apple iPhone 15</strong> é um dos melhores celulares de 2025, ideal para quem quer boas fotos, vídeos de qualidade e navegação sem travamentos.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Tela:</strong> Super Retina XDR OLED de 6.1 polegadas que combina ótimo brilho e cores vibrantes em um tamanho compacto.
          </li>
          <li>
            <strong>Desempenho:</strong> Processador <strong>A16 Bionic</strong> oferecendo <strong>desempenho poderoso e velocidade de sistema</strong>.
          </li>
          <li>
            <strong>Câmeras:</strong> Traseiras (wide de 48 MP e ultrawide de 12 MP) e frontal de 12 MP entregam ótimas fotos e vídeos. Zoom óptico de 5x e digital de 10x.
          </li>
          <li>
            <strong>Recursos:</strong> <strong>Face ID</strong>, <strong>NFC</strong> e <strong>certificação IP68</strong> com acabamento em titânio.
          </li>
          <li>
            <strong>Bateria:</strong> 3.349 mAh pode exigir recargas frequentes em uso intenso.
          </li>
          <li>
            <strong>Observação:</strong> Carregador vendido separadamente.
          </li>
        </ul>`,
        price: 4299, // From [98]
      },
      // {
      //   name: "Apple iPhone 13",
      //   image_link: "/https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/iphone_13.png", // Placeholder image
      //   reviews_links: "#", // No specific review link provided in sources
      //   description: `<p class="text-gray-700">
      //     O <strong>Apple iPhone 13</strong> é o <strong>melhor iPhone custo-benefício</strong> atualmente, perfeito para criar conteúdos e postar em redes sociais.
      //   </p>
      //   <ul class="list-disc ml-6 text-gray-700">
      //     <li>
      //       <strong>Tela:</strong> Excelente Super Retina XDR OLED de 6.1 polegadas com resolução Full HD+, embora a <strong>taxa de atualização seja fixa em 60Hz</strong>.
      //     </li>
      //     <li>
      //       <strong>Desempenho:</strong> Processador <strong>A15 Bionic</strong> oferecendo bom desempenho geral.
      //     </li>
      //     <li>
      //       <strong>Câmeras:</strong> Ótimo conjunto com principal de 12MP, ultrawide/macro de 12MP e frontal de 12MP, capaz de gravar vídeos em <strong>4K</strong>.
      //     </li>
      //     <li>
      //       <strong>Bateria:</strong> 3.240 mAh compatível com carregamento sem fio.
      //     </li>
      //     <li>
      //       <strong>Recursos:</strong> <strong>Conectividade 5G</strong>, disponível em seis cores com estrutura de alumínio.
      //     </li>
      //     <li>
      //       <strong>Limitações:</strong> A capacidade da memória RAM (4GB) poderia ser maior.
      //     </li>
      //     <li>
      //       <strong>Observação:</strong> Carregador vendido separadamente.
      //     </li>
      //   </ul>`,
      //   price: undefined, // Price not explicitly stated, but categorized as cost-benefit [102]
      // },
    ],
  },
  motorola: {
    name: "Motorola",
    logo: "MOTOROLA",
    strengths: ["battery", "cost", "design", "longevity", "software"],
    ratings: {
      camera: 7,
      performance: 8,
      battery: 9,
      cost: 9,
      software: 8,
      design: 8,
      longevity: 8,
    },
    content: {
      overview: `<p class="text-gray-700">A <strong>Motorola</strong> é uma marca com forte presença no mercado brasileiro, especialmente com a popular linha <strong>Moto G</strong>, conhecida por seu <strong>custo-benefício</strong>. A linha <strong>Edge</strong> representa a aposta da Motorola no segmento premium, equilibrando <strong>sofisticação</strong> e <strong>performance</strong>.</p>`,
      cameras: `<p class="text-gray-700">A Motorola tem melhorado significativamente o conjunto de câmeras de seus aparelhos. O <strong>Motorola Edge 50 Ultra</strong> é destacado por sua <strong>lente teleobjetiva de 64 MP</strong> e um conjunto que impressiona pela proximidade com os melhores do segmento. O <strong>Edge 50 Neo</strong> também se sobressai com excelentes câmeras, incluindo um <strong>sensor principal de 50 MP</strong> e <strong>zoom óptico de 3x</strong>, além de <strong>gravação em 4K</strong> e uma frontal de <strong>32 MP</strong>. Modelos como o <strong>Moto G35</strong> (<strong>50 MP</strong>) e <strong>Moto G85</strong> (<strong>50 MP</strong>) oferecem boas fotos para suas respectivas faixas de preço.</p>`,
      software: `<p class="text-gray-700">Os smartphones Motorola são conhecidos por sua <strong>interface Android limpa e fluida ('Android puro')</strong>, com recursos úteis como gestos e o assistente Moto AI.</p>`,
      longevity: `<p class="text-gray-700">A Motorola tem aprimorado seu compromisso com as atualizações de software. Modelos mais recentes como o <strong>Edge 50 Neo</strong> oferecem <strong>cinco anos de atualizações de segurança e atualizações de sistema até o Android 19</strong>. O Moto G34 promete cinco atualizações de SO. A durabilidade física é um ponto forte em alguns modelos, com o <strong>Edge 50 Ultra, Edge 50 Neo e Edge 40 Neo apresentando certificação IP68</strong> para resistência à água e poeira, e o Edge 50 Neo é descrito com 'ultrarresistência militar'. O Moto G85 possui IP54.</p>`,
      design: `<p class="text-gray-700">Design sofisticado e premium, muitas vezes com <strong>corpo curvado</strong> e acabamentos que imitam <strong>couro vegano</strong> ou <strong>madeira</strong>. Alguns modelos como o <strong>Moto G84</strong> se destacam pelo <strong>design ultrafino</strong>.</p>`,
      performance: `<p class="text-gray-700">Os aparelhos Motorola utilizam processadores <strong>Snapdragon</strong> (como o <strong>Snapdragon 8s Gen 3 no Edge 50 Ultra</strong> e <strong>Snapdragon 6 Gen 3 no Moto G75</strong>) e <strong>Dimensity</strong> (como o <strong>Dimensity 8350 Extreme no Edge 60 Pro</strong> e <strong>Dimensity 7060 no Moto G56</strong>), oferecendo <strong>desempenho ágil</strong> para multitarefas e jogos. A linha <strong>Razr</strong>, como o <strong>Razr 60 Ultra</strong>, é destacada como o <strong>dobrável mais ágil</strong>.</p>`,
      battery_charging: `<p class="text-gray-700">Muitos modelos Motorola se destacam pela <strong>longa duração da bateria</strong>, com o <strong>Edge 60 Pro</strong> e o <strong>Realme GT7</strong> atingindo quase <strong>40 e 48 horas de autonomia</strong> respectivamente. Modelos como o <strong>Moto G56 5G</strong> (<strong>5.200 mAh</strong>), <strong>Moto G35</strong> (<strong>5.000 mAh</strong>), <strong>Moto G84</strong> (<strong>5.000 mAh</strong>) e <strong>Moto G85</strong> (<strong>5.000 mAh</strong>) oferecem bateria para um dia inteiro ou mais. A marca também é forte em <strong>carregamento ultrarrápido</strong>, com o <strong>Edge 50 Ultra</strong> recarregando em cerca de <strong>20 minutos</strong> (<strong>125W</strong>) e o <strong>Edge 50 Neo</strong> (<strong>68W</strong>) em <strong>30 minutos para 50%</strong>. O carregador <strong>Turbo Power</strong> vem incluso na caixa da maioria dos modelos.</p>`,
    },
    phone_models: [
      // Samsung
      {
        name: "Motorola Moto G85",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/motorola/moto_g85.png", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          O <strong>Motorola Moto G85</strong> é um smartphone intermediário básico que se destaca pelo seu <strong>design premium</strong> e <strong>tela de qualidade</strong>.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Tela:</strong> pOLED de 6.67 polegadas com <strong>taxa de atualização de 120Hz</strong> e <strong>1.600 nits de brilho</strong>, design texturizado e Gorilla Glass 5.
          </li>
          <li>
            <strong>Desempenho:</strong> Processador <strong>Snapdragon 6s Gen3</strong> e <strong>8GB de RAM</strong> (expansível com RAM Boost) e até 512GB de armazenamento, oferecendo desempenho suficiente para jogos casuais e multitarefas.
          </li>
          <li>
            <strong>Câmeras:</strong> <strong>Principal de 50 MP</strong> e <strong>ultrawide de 8 MP</strong> capturam fotos detalhadas, frontal de 32 MP.
          </li>
          <li>
            <strong>Bateria:</strong> <strong>5.000 mAh</strong> com <strong>carregamento rápido de 33W</strong> garantindo boa autonomia.
          </li>
          <li>
            <strong>Recursos:</strong> <strong>IP54</strong>, <strong>som estéreo com Dolby Atmos</strong>, excelente escolha para quem busca um celular completo com bom custo-benefício.
          </li>
        </ul>`,
        price: 1299, // Based on prompt example and inferred from source [107, 108]
      },
      {
        name: "Motorola Edge 50 Ultra",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/motorola/moto_edge_50ultra.webp", // Placeholder image
        reviews_links:
          "https://www.tudocelular.com/Motorola/fichas-tecnicas/n10692/Motorola-Edge-50-Ultra.html",
        description: `<p class="text-gray-700">
          O <strong>Motorola Edge 50 Ultra</strong> é um flagship potente para 2025, aclamado como um dos melhores celulares topo de linha.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Design:</strong> Sofisticado com curvas sutis, proteção <strong>IP68</strong> e carregamento sem fio.
          </li>
          <li>
            <strong>Tela:</strong> pOLED de 6.7 polegadas com <strong>144Hz de taxa de atualização</strong> e <strong>2.500 nits de brilho</strong>, oferecendo experiência visual vibrante com HDR10+.
          </li>
          <li>
            <strong>Desempenho:</strong> Processador <strong>Snapdragon 8s Gen3</strong> e até <strong>16GB de RAM</strong>, proporcionando desempenho eficiente sem superaquecimento.
          </li>
          <li>
            <strong>Câmeras:</strong> Conjunto triplo com <strong>principal de 50MP, ultrawide de 50MP e telefoto de 64MP</strong>, com destaque para a precisão no modo noturno e gravação <strong>4K/60fps</strong>.
          </li>
          <li>
            <strong>Bateria:</strong> <strong>4.500 mAh</strong> que se mantém consistente sob uso intenso.
          </li>
          <li>
            <strong>Carregamento:</strong> <strong>Ultrarrápido de 125W</strong> que recupera a carga em apenas 20 minutos.
          </li>
          <li>
            <strong>Software:</strong> <strong>Android puro</strong> e recursos Moto AI, sendo uma opção equilibrada e robusta.
          </li>
        </ul>`,
        price: 3429, // From [116, 117]
      },
      {
        name: "Motorola Moto G35",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/motorola/moto_g35.png", // Placeholder image
        reviews_links:
          "https://www.tudocelular.com/Motorola/fichas-tecnicas/n10692/Motorola-Moto-G35.html", // Example from source
        description: `<p class="text-gray-700">
          O <strong>Motorola Moto G35</strong> é a escolha ideal para quem quer um <strong>celular 5G barato</strong>, custando menos de R$ 1.000.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Design:</strong> Simples com traseira em estilo couro vegano, suporte a <strong>eSIM, rádio FM, NFC e som estéreo</strong>, tornando-o um pacote bem completo.
          </li>
          <li>
            <strong>Tela:</strong> IPS LCD de 6.7 polegadas Full HD+ com 120 Hz oferecendo boa fluidez.
          </li>
          <li>
            <strong>Desempenho:</strong> Processador <strong>Snapdragon 695 5G</strong> com <strong>4GB de RAM</strong> e 128GB/256GB de armazenamento, básico mas suficiente para redes sociais e jogos leves.
          </li>
          <li>
            <strong>Bateria:</strong> <strong>5000 mAh</strong> garante mais de um dia de uso (perto de 30 horas), com <strong>carregador de 20W incluso</strong>.
          </li>
          <li>
            <strong>Câmera:</strong> <strong>Principal de 50 MP</strong> faz boas fotos de dia e grava em <strong>4K</strong>, algo raro nessa faixa de preço.
          </li>
          <li>
            <strong>Recursos:</strong> Entrada padrão para fones de ouvido e expansão de armazenamento por microSD.
          </li>
        </ul>`,
        price: 879, // From [120]
      },
      {
        name: "Motorola Moto G75",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/motorola/moto_g75.png", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          O <strong>Motorola Moto G75</strong> se destaca por seu <strong>bom hardware, tela muito bonita e construção interessante</strong>, com um preço competitivo (pouco mais de R$1400).
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Design:</strong> Apesar de ser todo de plástico, seu design o faz parecer mais premium.
          </li>
          <li>
            <strong>Tela:</strong> IPS LCD de 6.78 polegadas bem grande, ideal para quem gosta de smartphones maiores, com <strong>120 Hz de taxa de atualização</strong> e <strong>1000 nits de brilho</strong>.
          </li>
          <li>
            <strong>Desempenho:</strong> <strong>Snapdragon 6 de terceira geração</strong> e <strong>8GB de RAM</strong> (até 256GB de armazenamento) proporcionando um desempenho muito interessante, rodando jogos e aplicativos fluidamente.
          </li>
          <li>
            <strong>Software:</strong> Promessa de <strong>cinco updates de sistema operacional</strong>.
          </li>
          <li>
            <strong>Bateria:</strong> <strong>5000 mAh</strong> com <strong>carregador de 30W incluso</strong> e compatibilidade com <strong>carregador sem fio de 15W</strong>.
          </li>
          <li>
            <strong>Recursos:</strong> <strong>IP68</strong> de resistência à água e poeira.
          </li>
          <li>
            <strong>Câmera:</strong> <strong>Principal de 50 MP</strong> entrega fotos de qualidade, com câmera frontal preferida por alguns usuários.
          </li>
        </ul>`,
        price: 1400, // Inferred from "pouco mais de R$1400" [123]
      },
      {
        name: "Motorola Edge 60 Pro 5G",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/motorola/moto_edge_60_pro.png", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          Do portfólio da Motorola, o <strong>Motorola Edge 60 Pro 5G</strong> é um destaque que entrega <strong>design sofisticado</strong> com corpo curvado, certificações <strong>IP68 e IP69</strong> e padrão militar.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Tela:</strong> pOLED de 6.7 polegadas e 120 Hz proporcionando ótima imersão com brilho forte e suporte HDR10+, complementado por <strong>som estéreo com Dolby Atmos</strong>.
          </li>
          <li>
            <strong>Desempenho:</strong> Chipset <strong>MediaTek Dimensity 8350 Extreme</strong> e <strong>12GB de RAM</strong> (mais 12GB RAM Boost), oferecendo desempenho ágil, multitarefas eficiente e bons resultados em benchmarks, rodando jogos pesados.
          </li>
          <li>
            <strong>Bateria:</strong> <strong>6.000 mAh</strong> alcança quase 40 horas de autonomia em uso moderado, com <strong>carregador Turbo Power de 90W</strong> que recarrega metade em 30 minutos.
          </li>
          <li>
            <strong>Câmeras:</strong> Conjunto triplo com <strong>50 MP principal, 10 MP telefoto, 50 MP ultrawide com sensor Sony LYTIA</strong> garantindo fotos nítidas e cores naturais, inclusive no modo noturno.
          </li>
          <li>
            <strong>Recursos:</strong> Recursos Moto AI e Smart Connect.
          </li>
        </ul>`,
        price: 3999, // From [115]
      },
      {
        name: "Motorola Moto G56 5G",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/motorola/moto_g56.png", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          A tradicional linha Moto G está entre as queridinhas dos brasileiros, e o <strong>Motorola Moto G56 5G</strong> é uma das melhores opções do portfólio da marca que alia <strong>desempenho confiável e preços mais em conta</strong>.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Tela:</strong> 6.7 polegadas Full HD+ com 120 Hz de taxa de atualização.
          </li>
          <li>
            <strong>Desempenho:</strong> Processador <strong>MediaTek Dimensity 7060</strong> garantindo fluidez no uso.
          </li>
          <li>
            <strong>Memória:</strong> Até <strong>512 GB de armazenamento</strong> e <strong>8 GB de RAM</strong> (com 16 GB RAM Boost).
          </li>
          <li>
            <strong>Câmeras:</strong> Dupla incluindo um sensor principal de 50 MP e um de 8 MP, ambos com sensor Sony LYTIA, com recursos Moto AI.
          </li>
          <li>
            <strong>Bateria:</strong> <strong>5.200 mAh</strong> oferecendo excelente autonomia.
          </li>
        </ul>`,
        price: 1999, // From [126]
      },
      {
        name: "Motorola Edge 50 Neo",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/motorola/moto_edge_50neo.webp", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          O <strong>Motorola Edge 50 Neo</strong> se destaca pelo seu <strong>design com ultrarresistência militar</strong> e <strong>certificação IP68</strong>, suportando imersão de até 1.5 metro por 30 minutos.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Tela:</strong> pOLED de 6.4 polegadas com <strong>120Hz de taxa de atualização</strong> e <strong>3.000 nits de brilho</strong> proporcionando cores vibrantes e ótima visibilidade (Modo Ultrabrilho).
          </li>
          <li>
            <strong>Desempenho:</strong> Processador <strong>MediaTek Dimensity 7300</strong> oferecendo desempenho potente e fluído.
          </li>
          <li>
            <strong>Câmeras:</strong> Principal de 50MP com sensor 700C, ultrawide de 13MP e lente telefoto de 10MP (zoom óptico de 3x), além de <strong>frontal de 32MP</strong>, gravando em <strong>4K/30fps</strong>.
          </li>
          <li>
            <strong>Bateria:</strong> <strong>4.310 mAh</strong> com autonomia de até 48 horas e <strong>carregamento rápido TurboPower de 68W</strong> que carrega mais de 50% em 20 minutos.
          </li>
          <li>
            <strong>Software:</strong> Promete <strong>5 anos de atualizações de segurança</strong> e updates até o Android 19.
          </li>
          <li>
            <strong>Recursos:</strong> <strong>NFC</strong> e <strong>e-SIM</strong>.
          </li>
        </ul>`,
        price: 1800, // Inferred from price range R$1800-R$2000 [130]
      },
      {
        name: "Motorola Edge 40 Neo",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/motorola/moto_edge_40_neo.webp", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          O <strong>Motorola Edge 40 Neo</strong> é um dos Motorola mais avançados e potentes, com <strong>certificação IP68</strong> de resistência à água e poeira.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Tela:</strong> pOLED de 6.55 polegadas com <strong>144Hz de taxa de atualização</strong> garantindo visualização imersiva e fluida.
          </li>
          <li>
            <strong>Câmeras:</strong> Avançadas com gravação em 4K, incluindo <strong>principal de 50MP</strong> e <strong>frontal de 32MP</strong>.
          </li>
          <li>
            <strong>Desempenho:</strong> Processador <strong>MediaTek Dimensity 7030</strong> oferecendo bom desempenho, complementado por <strong>8GB de RAM</strong> e <strong>256GB de armazenamento</strong>.
          </li>
          <li>
            <strong>Bateria:</strong> <strong>5.000 mAh</strong> com <strong>carregamento TurboPower de 68W</strong> (carregador incluso) proporcionando longa duração e recarga rápida.
          </li>
          <li>
            <strong>Recursos:</strong> <strong>NFC</strong> para pagamentos por aproximação e desbloqueio facial.
          </li>
        </ul>`,
        price: undefined, // Price not explicitly stated, using "relatively high price" [132]
      },
    ],
  },
  xiaomi: {
    name: "Xiaomi / Poco",
    logo: "XIAOMI",
    strengths: ["cost", "performance", "battery", "camera"],
    ratings: {
      camera: 8,
      performance: 9,
      battery: 10,
      cost: 10,
      software: 7,
      design: 8,
      longevity: 7,
    },
    content: {
      overview: `<p class="text-gray-700">A <strong>Xiaomi</strong> e sua submarca <strong>Poco</strong> estão ganhando espaço no mercado brasileiro, sendo reconhecidas por oferecerem um <strong>excelente custo-benefício</strong>. A marca se destaca em diversos segmentos, desde celulares acessíveis como o <strong>Redmi Note 14</strong> até modelos mais potentes para jogos, como a linha <strong>POCO X</strong>.</p>`,
      cameras: `<p class="text-gray-700">As câmeras da <strong>Xiaomi</strong> variam, mas alguns modelos se destacam. O <strong>Redmi Note 14 Pro 5G</strong> possui uma <strong>câmera principal de 200 MP</strong> com recursos de IA que impressiona em boas condições de luz. O <strong>Redmi Note 14 4G</strong> oferece uma <strong>câmera de 108 MP</strong>, com boa qualidade de captura e desempenho surpreendente em <strong>fotos noturnas</strong>. O <strong>Xiaomi 15 Ultra</strong> é considerado um dos <strong>melhores telefones em câmera</strong>. Para a linha <strong>POCO</strong>, a <strong>câmera principal de 50 MP</strong> do <strong>POCO X7 Pro</strong> se sai bem em condições de luz favoráveis e grava em <strong>4K estabilizado</strong>, embora a qualidade geral da câmera não seja o ponto mais forte da linha.</p>`,
      software: `<p class="text-gray-700">Os celulares <strong>Xiaomi</strong> utilizam a interface <strong>HyperOS</strong> (anteriormente <strong>MIUI</strong>). A experiência pode ter alguns aplicativos pré-instalados (<strong>bloatware</strong>). A marca também integra funções de <strong>IA</strong>. A garantia de atualizações de software pode ser menos consistente em comparação com concorrentes como <strong>Samsung</strong> e <strong>Google</strong>. Por exemplo, o <strong>Redmi Note 14</strong> é mencionado com <strong>2 anos de atualizações</strong>, enquanto o <strong>Xiaomi 15 Ultra</strong> promete <strong>4 atualizações de SO</strong> e <strong>6 anos de segurança</strong>.</p>`,
      longevity: `<p class="text-gray-700">A <strong>Xiaomi</strong> e <strong>Poco</strong> têm investido em durabilidade física, com modelos como o <strong>Redmi Note 14 Pro 5G</strong> e <strong>POCO X7 Pro</strong> apresentando <strong>certificação IP68</strong> para resistência à água e poeira. O <strong>Redmi Note 14 4G</strong> possui <strong>IP54</strong>. Muitos aparelhos também contam com proteção <strong>Gorilla Glass</strong> para a tela. No entanto, a longevidade de software pode ser uma desvantagem fora dos canais oficiais, com garantia de apenas <strong>3 meses</strong> via importadores.</p>`,
      design: `<p class="text-gray-700">Design elegante e moderno. Muitos modelos apresentam <strong>acabamento premium</strong>, como o <strong>Redmi Note 14 Pro 5G</strong> com <strong>cantos arredondados</strong> e <strong>bordas curvas</strong> que transmitem uma sensação premium. O <strong>POCO X7 Pro</strong> tem um design considerado bonito.</p>`,
      performance: `<p class="text-gray-700">Os smartphones <strong>Xiaomi/Poco</strong> são frequentemente equipados com chipsets potentes, como o <strong>Snapdragon 8 Gen 3</strong> (<strong>Xiaomi 14 Ultra</strong>, <strong>Xiaomi 15 Pro</strong>) ou <strong>Dimensity 8400 Ultra</strong> (<strong>POCO X7 Pro</strong>, <strong>POCO X6 Pro</strong>) e <strong>Dimensity 7300 Ultra</strong> (<strong>POCO X7</strong>). Isso garante <strong>desempenho de ponta, ideal para jogos pesados e multitarefas</strong>, com sistemas de resfriamento como o <strong>POCO 3D IceLoop</strong> para manter as temperaturas controladas. O <strong>POCO X7 Pro</strong> é particularmente elogiado por sua potência, chegando a pontuações de <strong>benchmarks de topo de linha</strong>.</p>`,
      battery_charging: `<p class="text-gray-700">A autonomia da bateria é um forte da <strong>Xiaomi/Poco</strong>, com modelos como o <strong>POCO X7 Pro</strong> (<strong>6.000 mAh</strong>), <strong>Redmi Note 14 4G</strong> (<strong>5.500 mAh</strong>) e <strong>Xiaomi 15 Pro</strong> (<strong>6.100 mAh</strong>) oferecendo longa duração, muitos deles chegando a <strong>um dia e meio ou mais</strong> de uso moderado. A marca também é líder em <strong>carregamento rápido</strong>, com potências que variam de <strong>33W</strong> (<strong>Redmi Note 14 4G</strong>) a <strong>120W</strong> (<strong>POCO F6 Pro</strong>), e <strong>90W</strong> (<strong>POCO X7 Pro</strong>), com carregadores inclusos na caixa na maioria dos casos.</p>`,
    },
    phone_models: [
      {
        name: "Xiaomi Redmi Note 14 4G",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/xiaomi/xiaomi_14T.jpg", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          O <strong>Xiaomi Redmi Note 14 4G</strong> é o <strong>melhor custo-benefício de 2025</strong>, ideal para navegar na internet, usar redes sociais e tirar fotos sem gastar muito.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Câmera:</strong> <strong>Principal de 108 MP</strong> oferecendo boa qualidade de captura.
          </li>
          <li>
            <strong>Tela:</strong> AMOLED de 6.67 polegadas Full HD+ com 120 Hz de taxa de atualização, prometendo imagens fluidas.
          </li>
          <li>
            <strong>Desempenho:</strong> Processador <strong>MediaTek Helio G99-Ultra</strong> e <strong>8GB de RAM</strong>, oferecendo um sistema fluido e sem travamentos.
          </li>
          <li>
            <strong>Bateria:</strong> <strong>5.500 mAh</strong> garantindo longa duração (até um dia inteiro de uso), acompanha <strong>carregador de 33W</strong>.
          </li>
          <li>
            <strong>Proteção:</strong> <strong>Certificação IP54</strong> contra respingos e poeira.
          </li>
          <li>
            <strong>Limitações:</strong> Não possui conectividade 5G nem suporte a NFC.
          </li>
        </ul>`,
        price: 1248, // From [81, 137]
      },
      {
        name: "Xiaomi Redmi Note 14 Pro 5G",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/xiaomi/redmi_note_14_pro_5g.jpg", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          O <strong>Xiaomi Redmi Note 14 Pro 5G</strong> é um smartphone intermediário premium, considerado uma das melhores opções de custo-benefício.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Proteção:</strong> <strong>Certificação IP68</strong> garantindo resistência superior à água e poeira.
          </li>
          <li>
            <strong>Tela:</strong> AMOLED de 6.67 polegadas com resolução de 1.5K (QHD+) e 120Hz de taxa de atualização, com brilho de até 1800 nits.
          </li>
          <li>
            <strong>Desempenho:</strong> Processador <strong>MediaTek Dimensity 7300 Ultra</strong> e até <strong>12GB de RAM</strong>, oferecendo desempenho surpreendente para a categoria.
          </li>
          <li>
            <strong>Câmera:</strong> <strong>Principal de 200 MP</strong> impressiona em boas condições de luz e captura detalhes, com recursos de IA.
          </li>
          <li>
            <strong>Bateria:</strong> <strong>5.110 mAh</strong> garantindo autonomia de até um dia e meio.
          </li>
          <li>
            <strong>Recursos:</strong> Suporte a <strong>5G e NFC</strong>, acompanha <strong>carregador de 45W</strong>.
          </li>
        </ul>`,
        price: 2019, // From [148]
      },
      {
        name: "Xiaomi 15 Pro",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/xiaomi/xiaomi_15_pro.jpg", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          O <strong>Xiaomi 15 Pro</strong> é o <strong>melhor Xiaomi</strong> na lista de 2025, destacando-se por sua eficiência energética e desempenho superior.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Tela:</strong> LTPO OLED de 6.73 polegadas com resolução <strong>WQHD+ e 120Hz de taxa adaptável</strong> que otimiza a eficiência energética.
          </li>
          <li>
            <strong>Desempenho:</strong> <strong>Snapdragon 8 Elite</strong> e <strong>16GB de RAM</strong>, com processamento super eficiente, superando até rivais em benchmarks e rodando jogos pesados sem queda de frames.
          </li>
          <li>
            <strong>Câmeras:</strong> Sistema triplo de <strong>50MP</strong> em todas as lentes (wide, ultrawide e telefoto), oferecendo fotografia de alta qualidade, com a telefoto de 5x zoom óptico.
          </li>
          <li>
            <strong>Bateria:</strong> <strong>6.100 mAh</strong> - a maior da lista, durando facilmente dois dias de uso moderado, com <strong>carregamento hiper-rápido de 120W</strong>.
          </li>
          <li>
            <strong>Limitação:</strong> A MIUI pode ser pesada para alguns usuários.
          </li>
        </ul>`,
        price: undefined, // No specific price mentioned, categorized as top-tier [111]
      },
      {
        name: "Xiaomi POCO X7 Pro 5G",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/xiaomi/xiaomi_poco_x7_pro_5g.webp", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          O <strong>Xiaomi POCO X7 Pro 5G</strong> é um dos <strong>melhores celulares para jogos</strong> em 2025, combinando potência, qualidade de tela e longa duração de bateria.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Tela:</strong> AMOLED de 6.67 polegadas com 120Hz de taxa de atualização, resolução <strong>QHD+</strong> e brilho de até <strong>3.200 nits</strong>, protegida por Gorilla Glass 7i.
          </li>
          <li>
            <strong>Desempenho:</strong> Processador <strong>MediaTek Dimensity 8400 Ultra</strong> oferecendo desempenho de ponta para jogos pesados (AnTuTu 1.026.353), com <strong>até 12GB de RAM</strong> e eficiente sistema de resfriamento líquido.
          </li>
          <li>
            <strong>Câmera:</strong> <strong>Principal de 50MP com OIS</strong> capturando boas fotos.
          </li>
          <li>
            <strong>Bateria:</strong> <strong>6.000 mAh</strong> garantindo autonomia de até dois dias, com <strong>carregamento rápido de 90W</strong> (carregador incluso).
          </li>
          <li>
            <strong>Recursos:</strong> <strong>Certificação IP68</strong> e áudio estéreo com Dolby Atmos.
          </li>
        </ul>`,
        price: 2420, // From [156]
      },
      {
        name: "Xiaomi POCO X6 Pro 5G",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/xiaomi/xiaomi_poco_x6_pro.jpg", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          O <strong>Xiaomi POCO X6 Pro 5G</strong> é um modelo versátil ideal para qualquer tipo de uso, incluindo jogos, fotos e filmes.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Tela:</strong> AMOLED de 6.67 polegadas com resolução de 1.5K e 120Hz de taxa de atualização, oferecendo uma experiência visual de alta qualidade.
          </li>
          <li>
            <strong>Desempenho:</strong> Processador <strong>MediaTek Dimensity 8300-ultra</strong> e <strong>até 12GB de RAM</strong>, proporcionando desempenho avançado para jogos.
          </li>
          <li>
            <strong>Câmera:</strong> <strong>Principal de 64MP</strong> com 2x zoom óptico capturando fotos detalhadas.
          </li>
          <li>
            <strong>Bateria:</strong> <strong>5.000 mAh</strong> com <strong>carregamento rápido de 67W</strong> garantindo boa autonomia e recarga veloz.
          </li>
          <li>
            <strong>Recursos:</strong> Proteção Gorilla Glass 5 e armazenamento UFS 4.0.
          </li>
          <li>
            <strong>Limitações:</strong> Não tem slot para cartão microSD nem carregamento sem fio.
          </li>
        </ul>`,
        price: undefined, // Price not explicitly stated.
      },
      {
        name: "Xiaomi Redmi Note 13 Pro 5G",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/xiaomi/xiaomi_redmi_note_13_pro.jpg", // Placeholder image
        reviews_links:
          "https://www.tudocelular.com/reviews/n219355/Review-Xiaomi-Redmi-Note-13-Pro-5G.html",
        description: `<p class="text-gray-700">
          O <strong>Xiaomi Redmi Note 13 Pro 5G</strong> é um smartphone com <strong>acabamento premium</strong> e <strong>ótimo custo-benefício</strong>.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Câmera:</strong> <strong>Principal de 200 MP com zoom óptico de até 4x</strong>, ideal para fotos de alta qualidade.
          </li>
          <li>
            <strong>Tela:</strong> AMOLED de 6.67 polegadas com 120Hz de taxa de atualização e proteção Gorilla Glass Victus garantindo fluidez e resistência.
          </li>
          <li>
            <strong>Desempenho:</strong> Processador <strong>Qualcomm Snapdragon 7s Gen 2</strong> e <strong>até 16GB de RAM</strong>, oferecendo desempenho ágil.
          </li>
          <li>
            <strong>Bateria:</strong> <strong>5.100 mAh</strong> com <strong>carregador turbo de 67W incluso</strong> proporcionando ótima autonomia e recarga rápida.
          </li>
          <li>
            <strong>Recursos:</strong> <strong>Áudio estéreo</strong>, <strong>NFC</strong> para pagamentos por aproximação e certificação <strong>IP54</strong> contra respingos e poeira.
          </li>
        </ul>`,
        price: undefined, // Price not explicitly stated.
      },
      {
        name: "Xiaomi 14T",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/xiaomi/xiaomi_14T.jpg", // Placeholder image
        reviews_links:
          "https://www.tudocelular.com/Xiaomi/fichas-tecnicas/n10692/Xiaomi-14T.html",
        description: `<p class="text-gray-700">
          O <strong>Xiaomi 14T</strong> é o <strong>melhor Xiaomi para jogos</strong> em 2025, com <strong>design caprichado e certificação IP68</strong>.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Tela:</strong> AMOLED de 6.67 polegadas com <strong>resolução de 1220p e 144Hz de taxa de atualização</strong>, brilho muito forte e suporte a HDR10+ e Dolby Vision, oferecendo uma experiência visual de alta qualidade.
          </li>
          <li>
            <strong>Desempenho:</strong> Processador <strong>MediaTek Dimensity 8300 Ultra</strong> e <strong>até 16GB de RAM</strong> garantindo desempenho de sobra para qualquer tarefa, incluindo jogos competitivos.
          </li>
          <li>
            <strong>Câmeras:</strong> Conjunto <strong>desenvolvido em parceria com a Leica</strong> inclui <strong>principal de 50MP, teleobjetiva de 50MP (zoom óptico de 2x) e ultrawide de 12MP</strong>.
          </li>
          <li>
            <strong>Bateria:</strong> <strong>5.000 mAh</strong> proporcionando 29 horas de uso moderado, com <strong>carregador de 67W incluso</strong> que recarrega em menos de uma hora.
          </li>
          <li>
            <strong>Áudio:</strong> Potente com três alto-falantes.
          </li>
        </ul>`,
        price: 3475, // From [168]
      },
    ],
  },
  asus: {
    name: "Asus",
    logo: "ASUS",
    strengths: ["performance", "battery", "durability"],
    ratings: {
      camera: 7,
      performance: 10,
      battery: 9,
      cost: 6,
      software: 6,
      design: 8,
      longevity: 6,
    },
    content: {
      overview: `<p class="text-gray-700">A <strong>Asus</strong> é uma marca que se destaca no mercado de smartphones focada principalmente em <strong>celulares gamers de alto desempenho</strong>, como a linha <strong>ROG Phone</strong>. Esses aparelhos são projetados para oferecer uma <strong>experiência de jogo fluida e imersiva</strong>.</p>`,
      cameras: `<p class="text-gray-700">As câmeras dos celulares <strong>Asus</strong> não são o foco principal da marca, que prioriza o <strong>desempenho em jogos</strong>. O <strong>Asus ROG Phone 7</strong> possui uma <strong>câmera principal de 50 MP</strong>. O <strong>ROG Phone 8 Pro</strong>, embora não impressione no conjunto fotográfico em comparação com outros flagships, ainda é capaz de tirar boas fotos e vídeos.</p>`,
      software: `<p class="text-gray-700">As informações sobre o software geral dos telefones <strong>Asus</strong> são limitadas, com o foco principal sendo as características de <strong>hardware</strong> e <strong>desempenho para jogos</strong>.</p>`,
      longevity: `<p class="text-gray-700">Não há um compromisso explícito de <strong>longevidade de software</strong> detalhado para os smartphones <strong>Asus</strong>. Contudo, em termos de hardware, os modelos como o <strong>ROG Phone 8 Pro</strong> são construídos com um <strong>corpo robusto de metal</strong> e <strong>traseira de vidro</strong>, além de possuir <strong>certificação IP68</strong>, garantindo maior <strong>durabilidade e resistência</strong>.</p>`,
      design: `<p class="text-gray-700">Os <strong>ROG Phones</strong> apresentam um <strong>design único e robusto</strong>, com características voltadas para gamers, como centenas de <strong>mini-LEDs na traseira</strong> do <strong>ROG Phone 8 Pro</strong> que exibem animações e informações do sistema. O corpo é feito de <strong>metal</strong> com traseira em <strong>vidro</strong>.</p>`,
      performance: `<p class="text-gray-700">O desempenho é o principal diferencial da <strong>Asus</strong>. Os celulares <strong>ROG Phone</strong> são equipados com processadores de ponta, como o <strong>Snapdragon 8 Gen 2 no ROG Phone 7</strong> e <strong>Snapdragon 8 Gen 3 no ROG Phone 8 Pro</strong>. Eles são projetados para oferecer uma <strong>experiência de jogo fluida e sem travamentos</strong>, mesmo em configurações máximas, e contam com <strong>sistemas de resfriamento</strong> e <strong>gatilhos dedicados</strong> para otimizar o desempenho em longas sessões de jogo. O <strong>ROG Phone 8 Pro</strong>, com até <strong>24 GB de RAM</strong>, se destacou nos testes de <strong>multitarefas</strong>.</p>`,
      battery_charging: `<p class="text-gray-700">Os <strong>ROG Phones</strong> vêm com <strong>baterias grandes</strong> para suportar longas sessões de jogo. O <strong>Asus ROG Phone 7</strong> tem uma bateria de <strong>6.000 mAh</strong>, enquanto o <strong>ROG Phone 8 Pro</strong> possui <strong>5.500 mAh</strong>, que rende <strong>35 horas de uso</strong> em testes e leva <strong>40 minutos para recarregar</strong>.</p>`,
    },
    phone_models: [
      {
        name: "Asus ROG Phone 8 Pro",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/asus/rog_phone_8_pro.png", // Placeholder image
        reviews_links:
          "https://www.tudocelular.com/Asus/fichas-tecnicas/n10692/Asus-ROG-Phone-8-Pro.html",
        description: `<p class="text-gray-700">
          O <strong>Asus ROG Phone 8 Pro</strong> é a <strong>melhor opção de celular gamer</strong> vendido oficialmente no Brasil em 2024, mantendo-se relevante em 2025 para amantes de jogos.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Design:</strong> Único com centenas de mini-LEDs na traseira e corpo robusto de metal com traseira em vidro, com <strong>certificação IP68</strong>.
          </li>
          <li>
            <strong>Tela:</strong> AMOLED de 6.78 polegadas Full HD+ com <strong>taxa de atualização de 165Hz</strong> e sensor de toque de 720Hz garantindo uma experiência de jogo fluida.
          </li>
          <li>
            <strong>Desempenho:</strong> <strong>Snapdragon 8 Gen 3</strong> e <strong>até 24GB de RAM</strong>, oferecendo desempenho ágil para rodar qualquer jogo no máximo.
          </li>
          <li>
            <strong>Bateria:</strong> <strong>5.500 mAh</strong> proporcionando 35 horas de autonomia e carregamento em 40 minutos.
          </li>
          <li>
            <strong>Áudio:</strong> Potente com graves intensos.
          </li>
          <li>
            <strong>Câmeras:</strong> Embora não impressionem, ainda fazem boas fotos e vídeos.
          </li>
          <li>
            <strong>Gaming:</strong> Gatilhos dedicados e cooler como acessório para manter o celular frio durante jogos intensos.
          </li>
        </ul>`,
        price: 6719, // From [172]
      },
      {
        name: "Asus ROG Phone 7",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/asus/rog_phone_7.webp", // Placeholder image
        reviews_links: "#", // No specific review link provided in sources
        description: `<p class="text-gray-700">
          Para os gamers, o <strong>Asus ROG Phone 7</strong> é um dos melhores celulares topo de linha em 2024, projetado para oferecer uma <strong>experiência de jogo fluida</strong>.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Desempenho:</strong> Processador <strong>Snapdragon 8 Gen 2</strong> otimizado para jogos de alta performance.
          </li>
          <li>
            <strong>Tela:</strong> AMOLED de 6.78 polegadas com alta <strong>taxa de atualização de 165 Hz</strong>, ideal para jogos que demandam responsividade.
          </li>
          <li>
            <strong>Bateria:</strong> <strong>6.000 mAh</strong> garantindo longas sessões de jogo sem interrupções.
          </li>
          <li>
            <strong>Público-alvo:</strong> Escolha sólida para entusiastas de jogos móveis que buscam performance dedicada.
          </li>
        </ul>`,
        price: 4952, // From [39]
      },

      // Realme (Added based on available data and relevance as a top brand)
      // {
      //   name: "Realme GT7",
      //   image_link: "/https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/realme_gt7.png", // Placeholder image
      //   reviews_links: "#", // No specific review link provided in sources
      //   description: `<p class="text-gray-700">
      //     O <strong>Realme GT7</strong> se destaca pelo seu <strong>design sóbrio</strong> com acabamento em fibra especial e <strong>certificação IP69</strong>.
      //   </p>
      //   <ul class="list-disc ml-6 text-gray-700">
      //     <li>
      //       <strong>Resfriamento:</strong> Sistema ICEN com grafeno para uso intenso.
      //     </li>
      //     <li>
      //       <strong>Tela:</strong> LTPO AMOLED de 6.78 polegadas com <strong>120 Hz de taxa de atualização</strong> e brilho de até 2000 nits oferecendo ótima qualidade de imagem e alta sensibilidade ao toque.
      //     </li>
      //     <li>
      //       <strong>Desempenho:</strong> Chipset <strong>MediaTek Dimensity 9400</strong> e <strong>12GB de RAM</strong>, oferecendo desempenho fluido e estável.
      //     </li>
      //     <li>
      //       <strong>Bateria:</strong> <strong>7.000 mAh</strong> - a maior da lista, com até 48 horas de uso moderado, e o <strong>carregamento de 120W é o mais ágil</strong>, completando a carga em 47 minutos.
      //     </li>
      //     <li>
      //       <strong>Câmeras:</strong> Conjunto triplo com <strong>principal de 50MP com OIS, telefoto de 50MP 2x óptico, ultrawide de 8MP</strong> capturando fotos nítidas e filmando em 8K, com frontal de 32MP para selfies de boa captação de luz.
      //     </li>
      //   </ul>`,
      //   price: 4700, // Inferred from "custa em média R$ 4700" [124]
      // },
      {
        name: "Realme GT 6",
        image_link: "https://dteot7rs7ynbper3.public.blob.vercel-storage.com/assets/images/phones/asus/realme_GT_6.webp", // Placeholder image
        reviews_links:
          "https://www.tudocelular.com/realme/fichas-tecnicas/n10692/Realme-GT-6.html",
        description: `<p class="text-gray-700">
          O <strong>Realme GT 6</strong> é uma opção topo de linha com foco em <strong>custo-benefício</strong>, trazendo de volta a linha GT ao Brasil.
        </p>
        <ul class="list-disc ml-6 text-gray-700">
          <li>
            <strong>Design:</strong> Corpo mais simples em plástico com <strong>certificação IP65</strong>.
          </li>
          <li>
            <strong>Tela:</strong> LTPO AMOLED de 1200p com <strong>brilho bastante forte</strong> (um dos melhores testados) e suporte a HDR10 e Dolby Vision proporcionando uma experiência multimídia completa.
          </li>
          <li>
            <strong>Desempenho:</strong> <strong>Snapdragon 8s Gen 3</strong> e <strong>16GB de RAM</strong>, sendo ágil no uso multitarefas e em jogos.
          </li>
          <li>
            <strong>Bateria:</strong> <strong>5.000 mAh</strong> oferecendo ótimas 35 horas de autonomia, com <strong>carregador potente de 120W</strong> que recupera a carga em apenas meia hora.
          </li>
          <li>
            <strong>Câmeras:</strong> Traseiras fazem boas fotos e vídeos, embora a frontal fique um pouco abaixo dos outros.
          </li>
          <li>
            <strong>Áudio:</strong> Três alto-falantes para som imersivo.
          </li>
        </ul>`,
        price: 4499, // From [177, 178]
      },
    ],
  },
};

export const tabKeyToName = {
  overview: "Visão Geral",
  cameras: "Câmeras",
  software: "Software",
  longevity: "Longevidade",
  design: "Design",
  performance: "Desempenho",
  battery_charging: "Bateria",
  cost: "Custo-Benefício",
};

export const ratingsKeytoName = {
  camera: "Câmera",
  performance: "Desempenho",
  battery: "Bateria",
  cost: "Custo-Benefício",
  software: "Software",
  design: "Design",
  longevity: "Longevidade",
  AI: "Inteligência Artificial",
};
