import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

// Application data object
const appData = {
  pestel: [
    {
      title: "Political",
      assessment: "Stable regulatory environment, but increasing scrutiny.",
      implications:
        'Pandora must maintain transparent, clear labeling and marketing to preempt any regulatory backlash and preserve consumer trust. International trends point to stricter rules on terms like "synthetic".',
    },
    {
      title: "Economic",
      assessment: "Growing jewelry market amidst affordability concerns.",
      implications:
        "Pandora's accessible luxury price point is perfectly aligned with budget-conscious UK consumers seeking value. LGDs being 20-40% cheaper is a major advantage.",
    },
    {
      title: "Social",
      assessment: "Strong ethical and sustainability shift.",
      implications:
        "This is a major driver. Pandora's commitment to 100% recycled metals and renewable energy for LGDs provides a powerful ethical differentiator that resonates deeply with UK buyers, especially Millennials and Gen Z.",
    },
    {
      title: "Technological",
      assessment: "Rapid production innovation in HPHT and CVD.",
      implications:
        'This enables Pandora to source or produce high-quality, standardized diamonds affordably, supporting its mass-market, "full jewelry brand" strategy.',
    },
    {
      title: "Environmental",
      assessment: "Carbon footprint is a competitive advantage.",
      implications:
        "Pandora’s LGDs have a carbon footprint ~95% lower than mined diamonds. This is a critical differentiator and a key pillar of its brand positioning in an eco-conscious market.",
    },
    {
      title: "Legal",
      assessment: "Consumer protection and anti-greenwashing laws.",
      implications:
        "UK laws require environmental claims to be truthful and substantiated. Pandora must proactively audit and verify its sustainability claims to maintain consumer trust.",
    },
  ],
  porters: {
    labels: [
      "New Entrants",
      "Supplier Power",
      "Buyer Power",
      "Substitutes",
      "Rivalry",
    ],
    intensities: [2, 1, 3, 3, 3], // 1: Low, 2: Moderate, 3: High
    analysis: [
      {
        title: "Threat of New Entrants",
        intensity: "Moderate-High",
        text: "The barrier to entry for digital-first LGD jewelry brands is relatively low, though production is capital-intensive. Pandora's strong brand equity and distribution network act as significant deterrents, but agile online brands can gain traction quickly.",
      },
      {
        title: "Bargaining Power of Suppliers",
        intensity: "Low",
        text: "With LGD production scaling globally, the supply of rough stones is becoming abundant, leading to price drops and commoditization. Pandora's large purchasing volume further reduces supplier leverage.",
      },
      {
        title: "Bargaining Power of Buyers",
        intensity: "High",
        text: "Buyers are price-sensitive, digitally informed, and have low switching costs. The rapid price erosion of LGDs puts significant downward pressure on Pandora's pricing and margins.",
      },
      {
        title: "Threat of Substitute Products",
        intensity: "High",
        text: "The threat is severe. Substitutes include natural diamonds (repositioning as rare luxury), alternative gemstones (e.g., moissanite), and the popular vintage/second-hand jewelry market.",
      },
      {
        title: "Industry Rivalry",
        intensity: "High",
        text: "The LGD market is intensely competitive and facing saturation. Rivals include traditional jewelers and specialized LGD brands. This forces price wars and requires heavy investment in branding to avoid commoditization.",
      },
    ],
  },
  swot: {
    strengths: [
      {
        title: "Environmental Leadership",
        text: "Use of 100% renewable energy for LGDs and 100% recycled metals provides a substantial ethical edge.",
      },
      {
        title: "Brand Equity & Distribution",
        text: "A globally recognized brand with a massive, established retail and online network in the UK.",
      },
      {
        title: "Product Performance",
        text: 'The "Fuel With More" segment (incl. LGDs) showed strong growth (43% LGD comp increase), indicating high consumer appetite.',
      },
    ],
    weaknesses: [
      {
        title: "Low Revenue Contribution",
        text: "LGDs represent only about 1% of total revenue, indicating a long path to becoming a core driver.",
      },
      {
        title: "Slowed Rollout",
        text: "The global rollout is slower than anticipated due to the challenge of building consumer awareness in new markets.",
      },
      {
        title: "Brand Perception Conflict",
        text: "The LGD collection may risk diluting the brand's core image (charms) or clashing with high-value perceptions.",
      },
    ],
    opportunities: [
      {
        title: "Demand for Ethical Luxury",
        text: "Capitalize on growing demand from Gen Z/Millennials for sustainable and affordable jewelry (25% annual UK LGD growth).",
      },
      {
        title: "Diversification into Everyday Wear",
        text: "Leverage affordability to push beyond bridal into everyday luxury items like earrings, necklaces, and fashion rings.",
      },
      {
        title: "Digital-First Strategy",
        text: "Focus on digital strategies to meet expectations of tech-savvy, ethically-conscious UK consumers.",
      },
    ],
    threats: [
      {
        title: "Price Erosion & Commoditization",
        text: "The rapid decline in LGD prices erodes profit margins and threatens the perceived value of diamonds.",
      },
      {
        title: "Natural Diamond Marketing",
        text: "The mined diamond industry is aggressively repositioning its products as symbols of enduring, exclusive value.",
      },
      {
        title: "Intense Competition",
        text: "Pressure from both established luxury brands and specialized, digitally-native, ethical LGD retailers.",
      },
    ],
  },
  sources: [
    {
      title: "Bain & Company: Global Diamond Report 2024 – Market Bifurcation",
      uri: "https://example.com/bain-diamond-report-2024",
    },
    {
      title:
        "FTSE Russell: UK Consumer Sentiment on Sustainability (2025 Outlook)",
      uri: "https://example.com/ftse-sustainability-uk",
    },
    {
      title: "Pandora Q1 2024 Earnings Call Transcript & Strategy Update",
      uri: "https://example.com/pandora-q1-2024-earnings",
    },
    {
      title:
        "UK Government: Environmental Claims & Anti-Greenwashing Guidance (Latest)",
      uri: "https://example.com/uk-greenwashing-guidance",
    },
  ],
};

// Custom Chart Rendering Component (Radar Chart for Porter's)
const PortersChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      chartInstance.current = new Chart(ctx, {
        type: "radar",
        data: {
          labels: appData.porters.labels,
          datasets: [
            {
              label: "Force Intensity",
              data: appData.porters.intensities,
              backgroundColor: "rgba(13, 148, 136, 0.2)",
              borderColor: "rgb(13, 148, 136)",
              pointBackgroundColor: "rgb(13, 148, 136)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgb(13, 148, 136)",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              beginAtZero: true,
              max: 3,
              ticks: { stepSize: 1, display: false },
              pointLabels: {
                font: { size: 14, weight: "600" },
              },
            },
          },
          plugins: { legend: { display: false } },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="chart-container">
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

// Main Application Component
const PandoraAnalysis = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [pestelDetailsOpen, setPestelDetailsOpen] = useState({});
  const [activePortersAnalysis, setActivePortersAnalysis] = useState(
    appData.porters.analysis[0]
  );

  const handlePestelClick = (title) => {
    setPestelDetailsOpen((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const navItems = [
    { id: "overview", label: "Market Overview" },
    { id: "pestel", label: "External Environment" },
    { id: "porters", label: "Competitive Landscape" },
    { id: "swot", label: "Strategic Position" },
  ];

  const swotQuadrantColors = {
    strengths: {
      border: "border-green-500",
      header: "bg-green-100 text-green-800",
    },
    weaknesses: { border: "border-red-500", header: "bg-red-100 text-red-800" },
    opportunities: {
      border: "border-blue-500",
      header: "bg-blue-100 text-blue-800",
    },
    threats: {
      border: "border-yellow-500",
      header: "bg-yellow-100 text-yellow-800",
    },
  };

  // Define styles inside the component for single-file structure clarity
  const styles = `
        .chart-container { position: relative; width: 100%; max-width: 500px; margin-left: auto; margin-right: auto; height: 300px; max-height: 400px; }
        @media (min-width: 768px) { .chart-container { height: 400px; } }
        .nav-btn { transition: all 0.3s ease; }
        .nav-btn.active { background-color: #0d9488; color: white; }
        .nav-btn:not(.active):hover { background-color: #f0fdfa; }
        .pestel-card { transition: all 0.3s ease; }
        .pestel-card:hover { transform: translateY(-5px); box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1); }
        .swot-quadrant { transition: all 0.3s ease; }
        .swot-quadrant:hover { border-color: #0d9488; }
    `;

  return (
    <>
      <style>{styles}</style>
      <div id="app" className="container mx-auto p-4 md:p-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-teal-800">
            Pandora's Lab-Grown Diamond Strategy
          </h1>
          <p className="text-lg text-white mt-2">
            An Interactive Analysis of the UK Market (2024-2025)
          </p>
        </header>

        <nav className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`nav-btn text-sm md:text-base font-semibold py-2 px-4 rounded-full border border-teal-600 text-teal-700 ${
                activeSection === item.id ? "active" : ""
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <main>
          {/* Market Overview Section */}
          {activeSection === "overview" && (
            <section id="overview" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-center mb-2 text-teal-700">
                  Market Overview & Key Trends
                </h2>
                <p className="text-center max-w-3xl mx-auto text-white">
                  This section provides a high-level summary of the UK lab-grown
                  diamond market and the strategic shifts shaping its future.
                  Key metrics highlight the market's potential, while trend
                  analysis reveals the critical dynamics Pandora must navigate
                  as the industry moves from a niche disruption to a mainstream
                  commodity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <p className="text-3xl font-bold text-teal-600">$6.02B</p>
                  <p className="text-black mt-1">UK Jewelry Market by 2025</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <p className="text-3xl font-bold text-teal-600">25%</p>
                  <p className="text-black mt-1">Annual UK LGD Growth Rate</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <p className="text-3xl font-bold text-teal-600">~95%</p>
                  <p className="text-black mt-1">Lower Carbon Footprint</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <p className="text-3xl font-bold text-teal-600">100%</p>
                  <p className="text-black mt-1">Recycled Silver & Gold Used</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-black text-center">
                  Key Developments (2024-2025 Outlook)
                </h3>
                <ul className="space-y-4">
                  {appData.overviewDevelopments ? (
                    appData.overviewDevelopments.map((dev, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-teal-500 font-bold mr-3">
                          {index + 1}.
                        </span>
                        <div>
                          <h4 className="font-semibold ">{dev.title}</h4>
                          <p className="text-black">{dev.text}</p>
                        </div>
                      </li>
                    ))
                  ) : (
                    <>
                      <li className="flex items-start">
                        <span className="text-teal-500 font-bold mr-3">1.</span>
                        <div>
                          <h4 className="font-semibold text-black">
                            Price Collapse & Value Bifurcation
                          </h4>
                          <p className="text-black">
                            LGD prices are falling, with a 1-carat stone
                            projected to sell for $1,000 or less by 2025. This
                            splits the market: LGDs are becoming an "accessible,
                            everyday luxury," while natural diamonds are
                            repositioned as exclusive symbols of value. This
                            reinforces Pandora's mass-market strategy.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-500 font-bold mr-3">2.</span>
                        <div>
                          <h4 className="font-semibold text-black">
                            Sustainability as a Core Differentiator
                          </h4>
                          <p className="text-black">
                            Verified sustainability is crucial. Pandora’s use of
                            100% renewable energy for LGDs and 100% recycled
                            metals strongly appeals to ethically-minded
                            Millennial and Gen Z consumers, who are the primary
                            market drivers.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-500 font-bold mr-3">3.</span>
                        <div>
                          <h4 className="font-semibold text-black">
                            Strategic Adaptation & Slower Rollout
                          </h4>
                          <p className="text-black">
                            Pandora acknowledged its global LGD rollout is
                            slower than planned. This indicates a strategic
                            pivot to focus on building foundational consumer
                            awareness and trust in key markets like the UK
                            before pushing for aggressive expansion.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-teal-500 font-bold mr-3">4.</span>
                        <div>
                          <h4 className="font-semibold text-black">
                            Shift to a "Full Jewelry Brand"
                          </h4>
                          <p className="text-black">
                            LGDs are a key part of Pandora's "Phoenix strategy"
                            to diversify beyond charms. The "Fuel with More"
                            segment, including LGDs, saw 22% growth in 2024,
                            signaling a successful strategic shift.
                          </p>
                        </div>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </section>
          )}

          {/* PESTEL Section */}
          {activeSection === "pestel" && (
            <section id="pestel" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-center mb-2 text-teal-700">
                  External Environment: PESTEL Analysis
                </h2>
                <p className="text-center max-w-3xl mx-auto text-white">
                  This analysis examines the key Political, Economic, Social,
                  Technological, Environmental, and Legal factors impacting
                  Pandora's LGD business in the UK. Understanding these external
                  forces is crucial for identifying both opportunities and
                  potential challenges in the market. Click on each factor to
                  explore the detailed analysis.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {appData.pestel.map((item) => (
                  <div
                    key={item.title}
                    className="pestel-card bg-white p-6 rounded-xl shadow-md cursor-pointer"
                    onClick={() => handlePestelClick(item.title)}
                  >
                    <h3 className="text-xl font-bold text-teal-700 mb-2">
                      {item.title}
                    </h3>
                    <p className="font-semibold text-gray-800">
                      {item.assessment}
                    </p>
                    <div
                      className={`mt-4 pt-4 border-t border-gray-200 ${
                        pestelDetailsOpen[item.title] ? "" : "hidden"
                      }`}
                    >
                      <p className="text-black">{item.implications}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Porter's Five Forces Section */}
          {activeSection === "porters" && (
            <section id="porters" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-center mb-2 text-teal-700">
                  Competitive Landscape: Porter's Five Forces
                </h2>
                <p className="text-center max-w-3xl mx-auto text-white">
                  This framework analyzes the competitive intensity and
                  attractiveness of the UK lab-grown diamond market. The radar
                  chart below provides an immediate visual summary of the power
                  of each force—the larger the shape, the more intense the
                  pressure. Use the buttons to read the detailed analysis for
                  each competitive force.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <PortersChart />
                </div>
                <div className="space-y-4">
                  <div className="flex flex-wrap justify-center gap-2">
                    {appData.porters.analysis.map((item) => (
                      <button
                        key={item.title}
                        onClick={() => setActivePortersAnalysis(item)}
                        className={`py-2 px-3 text-sm text-black rounded-lg border border-gray-300 transition-colors ${
                          activePortersAnalysis.title === item.title
                            ? "bg-teal-600 text-white"
                            : "hover:bg-gray-100 bg-white"
                        }`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                  <div
                    id="porters-content"
                    className="bg-white p-6 rounded-xl shadow-inner min-h-[200px]"
                  >
                    <h4 className="font-bold text-lg text-teal-700">
                      {activePortersAnalysis.title}
                    </h4>
                    <p className="font-semibold text-black mb-2">
                      Intensity: {activePortersAnalysis.intensity}
                    </p>
                    <p className="text-black">{activePortersAnalysis.text}</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* SWOT Section */}
          {activeSection === "swot" && (
            <section id="swot" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-center mb-2 text-teal-700">
                  Strategic Position: SWOT Analysis
                </h2>
                <p className="text-center max-w-3xl mx-auto text-white">
                  The SWOT analysis provides a strategic overview of Pandora's
                  internal Strengths and Weaknesses in relation to the external
                  Opportunities and Threats in the UK LGD market. This framework
                  helps identify where Pandora can leverage its advantages and
                  where it needs to build defenses against market challenges.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {Object.keys(appData.swot).map((key) => {
                  const { border, header } = swotQuadrantColors[key];
                  return (
                    <div
                      key={key}
                      className={`swot-quadrant bg-white p-6 rounded-xl shadow-md border-t-4 ${border}`}
                    >
                      <h3
                        className={`text-xl font-bold capitalize mb-4 ${header} p-2 rounded text-center`}
                      >
                        {key}
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        {appData.swot[key].map((item, index) => (
                          <li
                            key={index}
                            className="flex items-start p-2 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <span className="mr-3 mt-1 text-sm font-bold text-gray-400">
                              &#9679;
                            </span>
                            <div>
                              <strong className="font-semibold">
                                {item.title}:
                              </strong>{" "}
                              {item.text}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </main>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-bold text-center mb-4 text-teal-700">
            Sources & Citations
          </h2>
          <div className="max-w-4xl mx-auto space-y-3 text-sm text-gray-600">
            <p className="text-center text-teal-100 italic">
              Analysis compiled from the following hypothetical source documents
              and data points:
            </p>
            {appData.sources.map((source, index) => (
              <div key={index} className="flex items-start">
                <span className="font-semibold text-teal-600 mr-2">
                  {index + 1}.
                </span>
                <a
                  href={source.uri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-gray-100"
                >
                  {source.title}
                </a>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </>
  );
};

export default PandoraAnalysis;
