import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Smartphone, TrendingUp, Users, Cpu, Leaf, Scale, Shield, DollarSign, Package, ShoppingCart, AlertTriangle } from 'lucide-react';

const AnalysisSection = ({ title, icon: Icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border border-gray-200 rounded-lg mb-4 shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors rounded-t-lg"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-6 h-6 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

const RatingBar = ({ rating, maxRating = 5, label }) => {
  const percentage = (rating / maxRating) * 100;
  const getColor = () => {
    if (rating <= 2) return 'bg-red-500';
    if (rating <= 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-bold text-gray-900">{rating}/{maxRating}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div 
          className={`h-3 rounded-full ${getColor()} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

const SamsungAnalysis = () => {
  const [activeTab, setActiveTab] = useState('pestel');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Smartphone className="w-12 h-12 text-blue-600" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Samsung Galaxy S25 Series</h1>
              <p className="text-xl text-gray-600">UK Market Strategic Analysis 2024-2025</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Launch Date</p>
              <p className="text-lg font-bold text-gray-900">January 22, 2025</p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">UK Availability</p>
              <p className="text-lg font-bold text-gray-900">February 7, 2025</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Starting Price (UK)</p>
              <p className="text-lg font-bold text-gray-900">£899.99</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveTab('pestel')}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
              activeTab === 'pestel'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            PESTEL Analysis
          </button>
          <button
            onClick={() => setActiveTab('porter')}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
              activeTab === 'porter'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            Porter's Five Forces
          </button>
        </div>

        {/* PESTEL Analysis */}
        {activeTab === 'pestel' && (
          <div>
            <AnalysisSection title="Political Factors" icon={Shield} defaultOpen={true}>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Post-Brexit Trade Environment</h4>
                  <p className="text-gray-700 mb-2">
                    The UK operates under post-Brexit trade agreements, which have stabilized after initial disruptions. Samsung benefits from established supply chains and direct market access without EU-wide regulatory constraints.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Moderate Positive</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Political Stability & Consumer Protection</h4>
                  <p className="text-gray-700 mb-2">
                    The UK maintains strong consumer protection laws and a stable political environment favorable to foreign investment. The Labour government (as of 2024) continues pro-business policies while emphasizing consumer rights and data protection.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Positive</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Trade Tensions & Tariffs</h4>
                  <p className="text-gray-700 mb-2">
                    Ongoing global trade tensions, particularly between major economies, could impact component sourcing and pricing. The UK's independent trade policy provides flexibility but also exposes Samsung to bilateral trade dynamics.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Neutral to Slightly Negative</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Digital Markets & Competition Regulation</h4>
                  <p className="text-gray-700 mb-2">
                    The UK Competition and Markets Authority (CMA) actively regulates digital markets. Samsung must navigate regulations around app stores, default applications, and data sharing practices.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Moderate - Requires Compliance Investment</p>
                </div>
              </div>
            </AnalysisSection>

            <AnalysisSection title="Economic Factors" icon={TrendingUp}>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Consumer Spending Recovery</h4>
                  <p className="text-gray-700 mb-2">
                    Q1 2025 showed positive household spending growth of 0.4% compared to Q4 2024, indicating recovering consumer confidence. Q4 2024 showed 0.1% growth, while Q3 2024 demonstrated stronger 0.5% growth.
                  </p>
                  <p className="text-sm text-gray-600 italic">Source: ONS Consumer Trends Reports | Impact: Positive</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Inflation & Cost of Living Pressures</h4>
                  <p className="text-gray-700 mb-2">
                    Despite improvements, UK consumers remain cautious due to elevated living costs. Premium smartphones at £899.99+ face scrutiny, though Samsung's brand strength and financing options help mitigate price sensitivity.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Moderate Challenge</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Currency Fluctuations (GBP)</h4>
                  <p className="text-gray-700 mb-2">
                    GBP volatility affects import costs and pricing strategies. Samsung must balance competitive pricing with margin protection when sourcing components globally.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Moderate - Requires Dynamic Pricing</p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Premium Segment Growth</h4>
                  <p className="text-gray-700 mb-2">
                    Despite economic challenges, UK consumers demonstrate willingness to invest in premium technology with lasting value. The £800-£1,200 smartphone segment remains resilient, particularly for flagship releases.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Positive for Galaxy S25 Series</p>
                </div>
              </div>
            </AnalysisSection>

            <AnalysisSection title="Social Factors" icon={Users}>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">AI Adoption & Digital Literacy</h4>
                  <p className="text-gray-700 mb-2">
                    UK consumers show strong interest in AI-powered features. The Galaxy S25's integration with Gemini AI (available in 46 languages at launch) aligns with growing demand for intelligent assistants and productivity tools.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Strong Positive</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Content Creation Culture</h4>
                  <p className="text-gray-700 mb-2">
                    Strong social media presence and content creation culture in the UK drive demand for advanced camera systems, video capabilities, and editing tools that Samsung's flagship devices offer.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Positive</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Brand Loyalty & Ecosystem Lock-in</h4>
                  <p className="text-gray-700 mb-2">
                    UK market shows divided loyalty between iOS and Android ecosystems. Samsung's ecosystem (Galaxy Watch, Buds, tablets) strengthens retention but faces competition from Apple's integrated approach.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Moderate - Competitive Pressure</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Sustainability Consciousness</h4>
                  <p className="text-gray-700 mb-2">
                    Growing UK consumer demand for sustainable products, longer device lifecycles, and responsible manufacturing. Samsung must emphasize recycling programs, repairability, and eco-credentials.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Increasingly Important</p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Work-from-Home & Hybrid Working</h4>
                  <p className="text-gray-700 mb-2">
                    Continued hybrid working patterns increase demand for devices supporting productivity, video calls, and seamless connectivity between home and office environments.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Positive</p>
                </div>
              </div>
            </AnalysisSection>

            <AnalysisSection title="Technological Factors" icon={Cpu}>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">AI Integration & On-Device Processing</h4>
                  <p className="text-gray-700 mb-2">
                    Galaxy S25 series features advanced AI capabilities with Gemini integration and One UI 7. On-device AI processing addresses privacy concerns while delivering intelligent features like Live Translate, Note Assist, and advanced photography.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Major Competitive Advantage</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">5G Network Maturity</h4>
                  <p className="text-gray-700 mb-2">
                    UK 5G coverage continues expanding with major carriers (EE, Vodafone, O2, Three) investing heavily. Galaxy S25's 5G capabilities align with infrastructure improvements, enabling enhanced mobile experiences.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Positive - Infrastructure Enabler</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Premium Materials & Durability Innovation</h4>
                  <p className="text-gray-700 mb-2">
                    Galaxy S25 Ultra features titanium frame and Corning's glare-free glass, representing material science advances. UK consumers value durability and premium build quality as justification for higher prices.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Positive Differentiation</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Rapid Innovation Cycles</h4>
                  <p className="text-gray-700 mb-2">
                    Annual flagship releases create both opportunities and challenges. Samsung must balance innovation velocity with longer device lifecycles demanded by sustainability-conscious consumers and market saturation.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Moderate Pressure</p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Cross-Device Ecosystem Technology</h4>
                  <p className="text-gray-700 mb-2">
                    Samsung's SmartThings platform, Galaxy ecosystem integration, and AI Home vision (showcased at IFA 2025) position smartphones as central hubs for connected living.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Strategic Long-term Advantage</p>
                </div>
              </div>
            </AnalysisSection>

            <AnalysisSection title="Environmental Factors" icon={Leaf}>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">UK Environmental Regulations</h4>
                  <p className="text-gray-700 mb-2">
                    Stringent UK e-waste regulations, Extended Producer Responsibility (EPR), and WEEE Directive compliance requirements. Samsung must demonstrate responsible end-of-life product management and recycling programs.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Compliance Required - Opportunity for Leadership</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Carbon Neutrality Commitments</h4>
                  <p className="text-gray-700 mb-2">
                    UK net-zero by 2050 target influences corporate sustainability expectations. Samsung's renewable energy commitments and carbon reduction goals align with UK policy direction and consumer values.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Positive for Brand Perception</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Sustainable Materials & Packaging</h4>
                  <p className="text-gray-700 mb-2">
                    Growing pressure to use recycled materials, reduce packaging waste, and eliminate single-use plastics. UK consumers increasingly evaluate products based on environmental credentials.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Moderate - Requires Ongoing Innovation</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Right to Repair Movement</h4>
                  <p className="text-gray-700 mb-2">
                    UK regulations supporting repairability and longer device lifecycles. Samsung must balance device design innovation with repairability, parts availability, and support for independent repair services.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Moderate Challenge - Requires Design Changes</p>
                </div>

                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Supply Chain Transparency</h4>
                  <p className="text-gray-700 mb-2">
                    Increased UK scrutiny of supply chain ethics, conflict minerals, and environmental impact. Samsung must demonstrate responsible sourcing and transparent supply chain management.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Reputational Risk Management</p>
                </div>
              </div>
            </AnalysisSection>

            <AnalysisSection title="Legal Factors" icon={Scale}>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Data Protection & Privacy (UK GDPR)</h4>
                  <p className="text-gray-700 mb-2">
                    UK GDPR and Data Protection Act 2018 impose strict requirements on data handling. Galaxy S25's AI features (Gemini integration) must comply with UK privacy standards, particularly for on-device vs. cloud processing.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: High Compliance Burden - Critical</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Consumer Rights & Warranties</h4>
                  <p className="text-gray-700 mb-2">
                    UK Consumer Rights Act 2015 provides strong protections including 2-year warranty requirements and clear return rights. Samsung must ensure robust after-sales support and product quality standards.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Moderate - Standard Compliance</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Intellectual Property Protection</h4>
                  <p className="text-gray-700 mb-2">
                    UK's strong IP framework protects Samsung's innovations while also exposing the company to patent disputes. Ongoing competition in mobile technology requires vigilant IP management.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Protective but Requires Active Management</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Competition & Antitrust Regulations</h4>
                  <p className="text-gray-700 mb-2">
                    CMA scrutiny of tech giants' practices, including app store policies, default settings, and market dominance. Samsung's position as major Android manufacturer attracts regulatory attention regarding pre-installed apps and partnerships.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Moderate - Ongoing Compliance</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Telecommunications Standards</h4>
                  <p className="text-gray-700 mb-2">
                    Ofcom regulations ensure compliance with UK telecommunications standards, spectrum usage, and network compatibility. Galaxy S25 must meet all technical standards for UK market approval.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Standard Compliance - Enabler</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Product Safety & CE Marking Successor</h4>
                  <p className="text-gray-700 mb-2">
                    Post-Brexit UK marking requirements (UKCA) alongside international standards. Samsung must navigate dual certification for UK and international markets.
                  </p>
                  <p className="text-sm text-gray-600 italic">Impact: Moderate - Administrative Burden</p>
                </div>
              </div>
            </AnalysisSection>
          </div>
        )}

        {/* Porter's Five Forces */}
        {activeTab === 'porter' && (
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Competitive Intensity Overview</h2>
              <div className="space-y-3">
                <RatingBar rating={4.2} label="Overall Market Intensity" />
                <p className="text-sm text-gray-600">
                  The UK premium smartphone market demonstrates high competitive intensity, driven by strong buyer power, intense rivalry, and moderate threat from substitutes. Samsung's established position and brand strength provide competitive advantages against new entrants.
                </p>
              </div>
            </div>

            <AnalysisSection title="Threat of New Entrants" icon={AlertTriangle} defaultOpen={true}>
              <div className="mb-6">
                <RatingBar rating={2.0} label="Threat Level (Low)" />
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">High Capital Requirements</h4>
                  <p className="text-gray-700">
                    <strong>Barrier Strength: Very High</strong><br/>
                    Entering the premium smartphone market requires massive R&D investment (£billions), manufacturing facilities, supply chain infrastructure, and marketing budgets. Galaxy S25 development represents years of investment in AI, materials science, and manufacturing capabilities that new entrants cannot easily replicate.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Established Brand Loyalty & Ecosystem Lock-in</h4>
                  <p className="text-gray-700">
                    <strong>Barrier Strength: High</strong><br/>
                    Samsung's decades-long UK presence, extensive retail partnerships (Carphone Warehouse, Currys, network operators), and ecosystem integration (Galaxy Watch, Buds, tablets) create significant switching costs. New entrants face the challenge of building brand recognition and trust in a mature market.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Technology & Patent Barriers</h4>
                  <p className="text-gray-700">
                    <strong>Barrier Strength: Very High</strong><br/>
                    Extensive patent portfolios, proprietary technologies (camera systems, display technology, chipset integration), and specialized manufacturing processes create formidable barriers. The UK's strong IP protection framework further reinforces these advantages for established players.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Distribution Channel Access</h4>
                  <p className="text-gray-700">
                    <strong>Barrier Strength: High</strong><br/>
                    Samsung has established relationships with all major UK carriers (EE, Vodafone, O2, Three), retail chains, and online platforms. Shelf space in physical retail is limited and controlled by existing relationships, making market access difficult for newcomers.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Regulatory Compliance Complexity</h4>
                  <p className="text-gray-700">
                    <strong>Barrier Strength: Moderate-High</strong><br/>
                    UK GDPR, product safety standards, telecommunications regulations, consumer protection laws, and environmental compliance create significant barriers. Established players have compliance infrastructure; new entrants must build from scratch.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Economies of Scale</h4>
                  <p className="text-gray-700">
                    <strong>Barrier Strength: High</strong><br/>
                    Samsung's global manufacturing scale enables competitive pricing despite premium positioning. New entrants cannot achieve comparable unit costs without massive volume, creating a significant competitive disadvantage.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Limited Threat from Chinese Brands</h4>
                  <p className="text-gray-700">
                    <strong>Consideration: Chinese OEMs (Xiaomi, OPPO, OnePlus)</strong><br/>
                    While established in other markets, Chinese brands face challenges gaining premium market share in the UK due to geopolitical concerns, limited brand recognition in the premium segment, and Samsung/Apple's entrenched positions. They remain relevant in mid-range segments but pose limited threat to Galaxy S25's premium positioning.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Summary Assessment</h4>
                <p className="text-gray-700">
                  The threat of new entrants to Samsung's premium smartphone position in the UK market is <strong>LOW</strong>. Multiple reinforcing barriers protect Samsung's market position, though vigilance is required regarding potential disruption from technology companies entering from adjacent markets (e.g., automotive, computing).
                </p>
              </div>
            </AnalysisSection>

            <AnalysisSection title="Bargaining Power of Suppliers" icon={Package}>
              <div className="mb-6">
                <RatingBar rating={2.8} label="Supplier Power (Low-Moderate)" />
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Semiconductor & Chipset Suppliers</h4>
                  <p className="text-gray-700">
                    <strong>Power Level: Moderate</strong><br/>
                    Galaxy S25 uses Snapdragon 8 Elite (Qualcomm) globally, creating dependency on Qualcomm's supply and pricing. However, Samsung's scale and Qualcomm's need for Samsung as a major customer creates mutual dependency. Samsung's own semiconductor manufacturing capabilities (though not for mobile SoCs currently) provide negotiating leverage.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Display Technology</h4>
                  <p className="text-gray-700">
                    <strong>Power Level: Low</strong><br/>
                    Samsung Display (subsidiary) manufactures OLED panels for Galaxy S25, providing vertical integration advantages. This self-sufficiency in display technology eliminates supplier power in this critical component category and actually positions Samsung as a supplier to competitors.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Camera & Optical Components</h4>
                  <p className="text-gray-700">
                    <strong>Power Level: Moderate-High</strong><br/>
                    Specialized camera suppliers (Sony for sensors, various lens manufacturers) hold significant power due to technological differentiation and limited alternatives. Camera quality is a key differentiator, giving suppliers leverage, though Samsung's volume provides some countervailing power.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Memory & Storage Components</h4>
                  <p className="text-gray-700">
                    <strong>Power Level: Very Low</strong><br/>
                    Samsung is the world's largest memory chip manufacturer, providing its own DRAM and NAND flash storage. This vertical integration eliminates supplier power and provides cost advantages over competitors relying on external suppliers.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Software & AI Platforms</h4>
                  <p className="text-gray-700">
                    <strong>Power Level: Moderate-High</strong><br/>
                    Google (Android OS, Gemini AI integration) represents significant supplier power. While Android is open-source, Google services and AI capabilities are proprietary. The Galaxy S25's deep Gemini integration creates dependency, though Samsung's scale provides negotiating leverage and the ability to develop alternative AI solutions.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Raw Materials & Manufacturing</h4>
                  <p className="text-gray-700">
                    <strong>Power Level: Low-Moderate</strong><br/>
                    Titanium suppliers (S25 Ultra frame), glass manufacturers (Corning), and other material suppliers exist in competitive markets. Samsung's purchasing power and ability to source from multiple regions reduces individual supplier power, though rare earth element suppliers retain some leverage.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">UK-Specific Supplier Dynamics</h4>
                  <p className="text-gray-700">
                    <strong>Impact: Minimal</strong><br/>
                    Samsung sources components globally with minimal UK-specific suppliers. Brexit has stabilized with established logistics, reducing supply chain disruption risks. Currency fluctuations in GBP affect import costs but don't change fundamental supplier relationships.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Summary Assessment</h4>
                <p className="text-gray-700">
                  Overall supplier power is <strong>LOW-MODERATE</strong>. Samsung's vertical integration in displays and memory, combined with its massive scale, limits most supplier power. Critical dependencies exist in chipsets (Qualcomm) and AI platforms (Google), but mutual dependencies and Samsung's strategic importance as a customer balance these relationships.
                </p>
              </div>
            </AnalysisSection>

            <AnalysisSection title="Bargaining Power of Buyers" icon={ShoppingCart}>
              <div className="mb-6">
                <RatingBar rating={3.8} label="Buyer Power (Moderate-High)" />
              </div>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Price Sensitivity & Economic Context</h4>
                  <p className="text-gray-700">
                    <strong>Power Level: High</strong><br/>
                    UK consumers remain cost-conscious post-inflation period despite recovery in consumer spending. At £899.99-£1,399.99 (S25 to S25 Ultra), price sensitivity is significant. Consumers actively compare value propositions, seek promotions, and consider trade-in programs, giving them substantial pricing power.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">High Competition & Abundant Alternatives</h4>
                  <p className="text-gray-700">
                    <strong>Power Level: Very High</strong><br/>
                    UK buyers can easily switch between Samsung, Apple, Google Pixel, and other Android manufacturers. Low switching costs (beyond ecosystem lock-in), transparent pricing, and widely available information empower consumers to demand competitive prices and features.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Information Transparency & Reviews</h4>
                  <p className="text-gray-700">
                    <strong>Power Level: High</strong><br/>
                    UK consumers have instant access to comprehensive reviews, comparisons, and pricing information through tech media, YouTube, and retail platforms. This transparency eliminates information asymmetry, strengthening buyer negotiating position.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Carrier & Retail Partnerships</h4>
                  <p className="text-gray-700">
                    <strong>Power Level: Moderate</strong><br/>
                    Major UK carriers (EE, Vodafone, O2, Three) and retailers (Currys, Argos) act as intermediary buyers with substantial negotiating power. They demand marketing contributions, exclusives, and competitive wholesale pricing, though Samsung's brand pull provides countervailing leverage.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Extended Device Lifecycles</h4>
                  <p className="text-gray-700">
                    <strong>Power Level: Moderate-High</strong><br/>
                    UK consumers increasingly hold devices for 3-4 years rather than 2-year upgrade cycles. This extended lifecycle reduces purchase frequency, making each buying decision more critical and increasing buyer power to demand value and longevity.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Brand Loyalty & Ecosystem Effects</h4>
                  <p className="text-gray-700">
                    <strong>Power Reduction: Moderate</strong><br/>
                    Existing Samsung ecosystem users (Galaxy Watch, Buds, tablets) face higher switching costs, reducing their buyer power. However, this benefit only applies to current Samsung customers, not the broader market.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Consumer Protection Laws</h4>
                  <p className="text-gray-700">
                    <strong>Power Level: Moderate</strong><br/>
                    Strong UK consumer rights (Consumer Rights Act 2015, 2-year warranties, clear return policies) empower buyers with legal protections. Retailers must accommodate returns and repairs, effectively increasing buyer power through regulatory backing.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Financing & Payment Options</h4>
                  <p className="text-gray-700">
                    <strong>Impact: Reduces Immediate Price Barrier</strong><br/>
                    Widespread 0% financing, carrier installment plans, and buy-now-pay-later options reduce upfront cost barriers. While this helps Samsung reach price-sensitive buyers, it also increases competition as all manufacturers can offer similar terms.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Summary Assessment</h4>
                <p className="text-gray-700">
                  Buyer power is <strong>MODERATE-HIGH</strong> in the UK market. Consumers and retail partners have significant leverage due to abundant alternatives, price transparency, and extended device lifecycles. Samsung must continuously demonstrate value and innovation to justify premium pricing against empowered, informed buyers.
                </p>
              </div>
            </AnalysisSection>

            <AnalysisSection title="Threat of Substitute Products" icon={Smartphone}>
              <div className="mb-6">
                <RatingBar rating={3.2} label="Substitution Threat (Moderate)" />
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Apple iPhone 16 Series</h4>
                  <p className="text-gray-700">
                    <strong>Threat Level: Very High</strong><br/>
                    iPhone 16 Pro and Pro Max represent the most direct substitute, competing in the same premium segment (£999-£1,199). Apple's ecosystem, brand loyalty, and iOS experience provide strong differentiation. UK market shows roughly balanced iOS/Android split, making iPhone a constant substitution threat.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Google Pixel 9 Series</h4>
                  <p className="text-gray-700">
                    <strong>Threat Level: Moderate</strong><br/>
                    Pixel 9 Pro (£999) offers pure Android experience, advanced AI features, and excellent camera systems. While smaller market share than Samsung, Pixel appeals to Android enthusiasts and represents direct competition on AI capabilities that Galaxy S25 emphasizes.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Previous Generation Samsung Devices</h4>
                  <p className="text-gray-700">
                    <strong>Threat Level: Moderate-High</strong><br/>
                    Galaxy S24 series at discounted prices (£600-£800) substitutes for price-sensitive buyers. Incremental improvements in S25 may not justify £300+ premium for some customers, particularly given extended device lifecycles and "good enough" performance of previous generation.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Chinese Premium Brands (Xiaomi, OPPO, OnePlus)</h4>
                  <p className="text-gray-700">
                    <strong>Threat Level: Low-Moderate</strong><br/>
                    Mid-to-premium devices at £400-£700 price points offer compelling specifications and features. Limited brand recognition in UK premium segment reduces threat, but value proposition appeals to specification-focused buyers willing to forego brand prestige.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Refurbished & Second-Hand Market</h4>
                  <p className="text-gray-700">
                    <strong>Threat Level: Moderate</strong><br/>
                    Growing UK market for certified refurbished devices offers premium specifications at reduced prices. Sustainability-conscious consumers increasingly consider refurbished options, particularly during economic uncertainty. Services like Back Market and CeX provide quality assurance.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Tablets & Laptops (Functional Substitution)</h4>
                  <p className="text-gray-700">
                    <strong>Threat Level: Low</strong><br/>
                    While tablets and laptops serve some overlapping functions, they don't substitute for smartphone's portability, communication capabilities, and always-available nature. Limited threat except in edge cases of consumers managing budget constraints across device categories.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Keep Existing Device (Non-Upgrade)</h4>
                  <p className="text-gray-700">
                    <strong>Threat Level: Moderate-High</strong><br/>
                    The strongest "substitute" is no purchase at all. Extended device lifecycles, mature smartphone functionality, and economic caution mean consumers may delay upgrades. This represents significant threat in saturated market where innovation increments are smaller.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Samsung's Own Mid-Range (Galaxy A Series)</h4>
                  <p className="text-gray-700">
                    <strong>Threat Level: Moderate</strong><br/>
                    Galaxy A55/A35 at £350-£450 offer solid performance, good cameras, and Samsung ecosystem integration. Cannibalization risk exists for price-sensitive buyers who don't require flagship specifications.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Summary Assessment</h4>
                <p className="text-gray-700">
                  Substitution threat is <strong>MODERATE</strong>. iPhone represents the strongest direct substitute, while previous-generation devices, refurbished options, and delayed upgrades pose significant indirect threats. Samsung must clearly differentiate S25's value proposition through AI features, ecosystem benefits, and premium experience to overcome substitution pressure.
                </p>
              </div>
            </AnalysisSection>

            <AnalysisSection title="Competitive Rivalry" icon={TrendingUp}>
              <div className="mb-6">
                <RatingBar rating={4.5} label="Rivalry Intensity (Very High)" />
              </div>
              
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Apple - Primary Premium Rival</h4>
                  <p className="text-gray-700">
                    <strong>Rivalry Level: Extreme</strong><br/>
                    Apple commands approximately 48-52% of UK premium smartphone market (devices £600+). iPhone 16 series directly competes with Galaxy S25 in specifications, pricing, and target demographics. Brand loyalty creates entrenched positions, with intense competition for switchers and first-time premium buyers. Both companies invest heavily in UK marketing, retail presence, and carrier partnerships.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Competitive Differentiators:</strong> Ecosystem lock-in (iMessage, iCloud, Apple Watch), perceived status, seamless integration, privacy messaging
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Google Pixel - Android Pure Play</h4>
                  <p className="text-gray-700">
                    <strong>Rivalry Level: Moderate-High</strong><br/>
                    Pixel 9 series has gained UK market traction (estimated 8-12% of Android premium market). Direct competition on AI capabilities, computational photography, and pure Android experience. Google's vertical integration (Android OS, AI, services) provides unique positioning against Samsung's customized approach.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Competitive Differentiators:</strong> First-party AI integration, seven years updates, pure Android, computational photography leadership
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Chinese OEMs (Xiaomi, OPPO, OnePlus, Honor)</h4>
                  <p className="text-gray-700">
                    <strong>Rivalry Level: Moderate</strong><br/>
                    Combined market share of 12-15% in UK, primarily mid-range but with premium aspirations. OnePlus 13, Xiaomi 14 Ultra, and Honor Magic 6 Pro offer competitive specifications at lower prices (£600-£850). Brand recognition remains challenge in UK premium segment, limiting direct rivalry impact.
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Competitive Approach:</strong> Value positioning, aggressive specs, lower pricing, feature innovation
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Market Maturity & Saturation</h4>
                  <p className="text-gray-700">
                    <strong>Impact: Intensifies Rivalry</strong><br/>
                    UK smartphone market is highly mature with 95%+ penetration. Growth comes primarily from replacements, not new users. This zero-sum dynamic intensifies competition as manufacturers fight for market share rather than market growth. Extended replacement cycles (3-4 years) reduce transaction frequency, making each sale more valuable and contested.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">High Fixed Costs & Innovation Investment</h4>
                  <p className="text-gray-700">
                    <strong>Impact: Drives Aggressive Competition</strong><br/>
                    Massive R&D investments (AI development, camera systems, materials innovation) create pressure to achieve volume and market share. Samsung's investment in Gemini AI integration, titanium materials, and display technology requires strong sales to justify costs, intensifying competitive pricing and promotional activity.
                  </p>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Low Differentiation Perception</h4>
                  <p className="text-gray-700">
                    <strong>Impact: High</strong><br/>
                    Many UK consumers perceive flagship smartphones as having converged in capabilities (excellent cameras, fast performance, good displays). This perception commoditizes products and intensifies price-based competition, forcing Samsung to clearly communicate AI and premium material advantages.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Retail & Carrier Bargaining Dynamics</h4>
                  <p className="text-gray-700">
                    <strong>Impact: Moderate-High</strong><br/>
                    Competition for premium retail space and carrier shelf positioning intensifies rivalry. EE, Vodafone, O2, and Three demand marketing support and exclusive features. Physical retail (Currys, Carphone Warehouse) requires promotional investments and display priority negotiations.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Innovation Race & Feature Parity</h4>
                  <p className="text-gray-700">
                    <strong>Impact: Accelerates Competition</strong><br/>
                    AI capabilities, camera improvements, and user experience innovations quickly reach feature parity across competitors. Galaxy S25's AI features (Gemini integration, Live Translate) face rapid competitive response from Apple Intelligence and Google's native AI, requiring continuous innovation.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Samsung's Competitive Advantages</h4>
                  <p className="text-gray-700">
                    <strong>Strengths:</strong><br/>
                    • Established UK market presence (30+ years)<br/>
                    • Broad product portfolio (S25, S25+, S25 Ultra) serving multiple price points<br/>
                    • Ecosystem integration (Galaxy Watch, Buds, tablets, TVs, appliances)<br/>
                    • Display technology leadership<br/>
                    • Strong carrier and retail relationships<br/>
                    • Brand recognition across demographics<br/>
                    • Extensive service network and support infrastructure
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Summary Assessment</h4>
                <p className="text-gray-700">
                  Competitive rivalry is <strong>VERY HIGH</strong> in the UK premium smartphone market. The combination of mature market conditions, powerful competitors (especially Apple), high fixed costs, low switching costs, and converging product capabilities creates intense competitive pressure. Samsung must continuously innovate, clearly differentiate, and maintain strong retail partnerships to defend and grow market share.
                </p>
              </div>
            </AnalysisSection>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-lg p-6 mt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Porter's Five Forces - Strategic Implications</h2>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Overall Market Attractiveness:</strong> Moderate. While barriers to entry are high and supplier power is manageable, the combination of high buyer power, moderate substitution threat, and very high competitive rivalry creates a challenging competitive environment for the Galaxy S25 in the UK market.
                </p>
                <p>
                  <strong>Key Strategic Priorities:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Differentiation through AI:</strong> Leverage Gemini integration and on-device AI to create clear value distinction from competitors</li>
                  <li><strong>Ecosystem Expansion:</strong> Strengthen Galaxy ecosystem to increase switching costs and customer retention</li>
                  <li><strong>Value Communication:</strong> Clearly articulate premium features (titanium, camera capabilities, AI) to justify pricing against empowered buyers</li>
                  <li><strong>Retail Partnership Strength:</strong> Maintain and deepen carrier and retail relationships to ensure prominent positioning</li>
                  <li><strong>Customer Retention:</strong> Focus on existing Samsung users with upgrade incentives, trade-in programs, and ecosystem benefits</li>
                  <li><strong>Innovation Velocity:</strong> Maintain rapid innovation pace to stay ahead of intense competitive rivalry, particularly from Apple</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Sources Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources & References</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <p><strong>Official Samsung:</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>Samsung UK Official Website - Galaxy S25 Product Launch Information</li>
              <li>Samsung Newsroom - Product Announcements and Features</li>
              <li>Samsung Mobile Press Releases - UK Market Launches</li>
            </ul>
            
            <p><strong>Government & Official Statistics:</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>UK Office for National Statistics (ONS) - Consumer Spending Trends 2024-2025</li>
              <li>UK Competition and Markets Authority (CMA) - Digital Markets Reports</li>
              <li>Ofcom - UK Telecommunications Market Data</li>
              <li>UK Department for Business and Trade - Trade Statistics</li>
            </ul>
            
            <p><strong>Industry Analysis & Market Research:</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>Statista - UK Smartphone Market Share and Consumer Data</li>
              <li>Counterpoint Research - Global and UK Smartphone Market Analysis</li>
              <li>IDC - Worldwide Mobile Device Tracker</li>
              <li>Gartner - Technology Market Analysis</li>
            </ul>
            
            <p><strong>News & Media:</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>BBC News - UK Economic and Technology Coverage</li>
              <li>Financial Times - Business and Market Analysis</li>
              <li>TechRadar UK - Product Reviews and Market Insights</li>
              <li>Mobile World Live - Industry News and Analysis</li>
            </ul>
            
            <p className="text-xs text-gray-500 mt-4 italic">
              Note: This analysis synthesizes publicly available information, market reports, and strategic frameworks. Specific market share figures and competitive dynamics are based on industry estimates and publicly reported data as of January-February 2025.
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-sm text-gray-500 mt-8">
          <p>Analysis prepared for Samsung Galaxy S25 UK Market Entry (2024-2025)</p>
          <p className="mt-2">© Strategic Market Analysis Framework</p>
        </div>
      </div>
    </div>
  );
};

export default SamsungAnalysis;