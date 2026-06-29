import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Calculator, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { InquiryFormInput } from '../types';

interface InteractiveQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: string;
}

const COMMODITY_BASE_PRICES: Record<string, { unit: string; basePrice: number; currency: string }> = {
  'Maize': { unit: 'Metric Ton', basePrice: 245, currency: 'USD' },
  'Wheat': { unit: 'Metric Ton', basePrice: 290, currency: 'USD' },
  'Bengal Gram': { unit: 'Metric Ton', basePrice: 620, currency: 'USD' },
  'Mexican Dollar Chana': { unit: 'Metric Ton', basePrice: 780, currency: 'USD' },
  'Green Gram': { unit: 'Metric Ton', basePrice: 890, currency: 'USD' },
  'Red Gram': { unit: 'Metric Ton', basePrice: 820, currency: 'USD' },
  'Soybean': { unit: 'Metric Ton', basePrice: 510, currency: 'USD' },
  'Turmeric': { unit: 'Metric Ton', basePrice: 1350, currency: 'USD' },
  'Ginger': { unit: 'Metric Ton', basePrice: 1100, currency: 'USD' },
};

export default function InteractiveQuoteModal({
  isOpen,
  onClose,
  selectedProduct = ''
}: InteractiveQuoteModalProps) {
  const [formData, setFormData] = useState<InquiryFormInput>({
    name: '',
    email: '',
    phone: '',
    company: '',
    commodity: selectedProduct || 'Wheat',
    quantity: '25',
    message: ''
  });

  const [isCalculating, setIsCalculating] = useState(false);
  const [calculatedQuote, setCalculatedQuote] = useState<{
    subtotal: number;
    logistics: number;
    insurance: number;
    totalMin: number;
    totalMax: number;
    unit: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Reset calculated quote if product or quantity changes
    if (name === 'commodity' || name === 'quantity') {
      setCalculatedQuote(null);
    }
  };

  // Run a simulated wholesale price calculation
  const handleCalculate = () => {
    const qtyNum = parseFloat(formData.quantity);
    if (isNaN(qtyNum) || qtyNum <= 0) {
      setErrorMsg('Please enter a valid positive quantity.');
      return;
    }
    setErrorMsg('');
    setIsCalculating(true);

    setTimeout(() => {
      const priceDetails = COMMODITY_BASE_PRICES[formData.commodity] || { basePrice: 300, unit: 'Metric Ton', currency: 'USD' };
      const subtotal = priceDetails.basePrice * qtyNum;
      
      // Volume discount (up to 8% for very large volume)
      const discountFactor = qtyNum >= 500 ? 0.92 : qtyNum >= 100 ? 0.95 : qtyNum >= 50 ? 0.97 : 1.0;
      const discountedSubtotal = subtotal * discountFactor;

      // Simulated logistics cost (depends on tonnage)
      const logistics = qtyNum * 42; // $42/ton global average logistics
      // Insurance cost (roughly 1.5% of cargo value)
      const insurance = discountedSubtotal * 0.015;

      const totalValue = discountedSubtotal + logistics + insurance;
      
      // Give a professional market range (+/- 4% for price fluctuation)
      setCalculatedQuote({
        subtotal: Math.round(discountedSubtotal),
        logistics: Math.round(logistics),
        insurance: Math.round(insurance),
        totalMin: Math.round(totalValue * 0.96),
        totalMax: Math.round(totalValue * 1.04),
        unit: priceDetails.unit
      });
      setIsCalculating(false);
    }, 600);
  };

  // Handle Quote Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.company) {
      setErrorMsg('Please fill in all contact details.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Save submission in localStorage for simulation persistence
      const savedQuotes = JSON.parse(localStorage.getItem('vitthala_quotes') || '[]');
      savedQuotes.push({
        id: 'VTQ-' + Math.floor(100000 + Math.random() * 900000),
        timestamp: new Date().toISOString(),
        ...formData,
        quoteDetails: calculatedQuote
      });
      localStorage.setItem('vitthala_quotes', JSON.stringify(savedQuotes));
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      commodity: 'Wheat',
      quantity: '25',
      message: ''
    });
    setCalculatedQuote(null);
    setIsSuccess(false);
    setErrorMsg('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto" id="quote-modal-container">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row"
          >
            {/* Sidebar Info (Golden Branding) */}
            <div className="w-full md:w-1/3 bg-gradient-to-b from-amber-600 via-amber-700 to-amber-900 text-white p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-amber-200">Interactive</span>
                <h3 className="text-2xl font-bold tracking-tight mt-1 mb-4 font-sans text-white">Institutional Quote Desk</h3>
                <p className="text-amber-100 text-sm leading-relaxed mb-6">
                  Get real-time indicative wholesale price calculations based on current spot commodity pricing indexes.
                </p>
              </div>

              <div className="space-y-4 text-xs text-amber-200">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Sourcing index updated: Live</span>
                </div>
                <div className="border-t border-amber-500/30 pt-3">
                  <p className="font-semibold text-white">Trading Standards</p>
                  <p className="text-amber-200/80 mt-1">FOB / CIF incoterms supported. Global logistics insured by A-rated underwriters.</p>
                </div>
              </div>
            </div>

            {/* Form & Calculator Area */}
            <div className="w-full md:w-2/3 bg-neutral-950 p-8 text-neutral-100 flex flex-col max-h-[85vh] overflow-y-auto">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white bg-neutral-900 hover:bg-neutral-800 p-2 rounded-full transition-colors border border-neutral-800"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {isSuccess ? (
                /* Success Screen */
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center justify-center text-center py-8 my-auto"
                >
                  <div className="h-16 w-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-6 border border-emerald-500/30">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-white tracking-tight">Inquiry Received</h4>
                  <p className="text-neutral-400 text-sm max-w-sm mt-2 mb-6">
                    Thank you! Your quote request has been registered with ID <span className="text-amber-400 font-mono font-semibold">VTQ-{Math.floor(100000 + Math.random() * 900000)}</span>. Our trading desk will review and contact you within 2 business hours.
                  </p>
                  <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-4 w-full text-left mb-6 text-xs space-y-2">
                    <div className="flex justify-between border-b border-neutral-800 pb-2">
                      <span className="text-neutral-500">Commodity</span>
                      <span className="text-white font-medium">{formData.commodity}</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-800 pb-2">
                      <span className="text-neutral-500">Volume</span>
                      <span className="text-white font-medium">{formData.quantity} Metric Tons</span>
                    </div>
                    <div className="flex justify-between border-b border-neutral-800 pb-2">
                      <span className="text-neutral-500">Inquirer Name</span>
                      <span className="text-white font-medium">{formData.name} ({formData.company})</span>
                    </div>
                    {calculatedQuote && (
                      <div className="flex justify-between pt-1">
                        <span className="text-neutral-500">Indicative Range</span>
                        <span className="text-amber-400 font-mono font-bold">${calculatedQuote.totalMin.toLocaleString()} - ${calculatedQuote.totalMax.toLocaleString()} USD</span>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-2 text-sm font-semibold bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 px-6 py-3 rounded-full text-white transition-colors cursor-pointer"
                  >
                    <span>Request Another Quote</span>
                    <ArrowRight size={16} />
                  </button>
                </motion.div>
              ) : (
                /* Form Screen */
                <div>
                  <h4 className="text-xl font-bold tracking-tight mb-2 text-white">Quote & Inventory Sourcing</h4>
                  <p className="text-xs text-neutral-400 mb-6">Enter details below to run our pricing matrix.</p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Commodity & Quantity Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-neutral-400 font-semibold mb-1">Select Commodity</label>
                        <select
                          name="commodity"
                          value={formData.commodity}
                          onChange={handleChange}
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                        >
                          {Object.keys(COMMODITY_BASE_PRICES).map(name => (
                            <option key={name} value={name}>{name}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-400 font-semibold mb-1">Estimated Quantity (Tons)</label>
                        <div className="relative">
                          <input
                            type="number"
                            name="quantity"
                            min="5"
                            max="10000"
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder="e.g. 50"
                            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-3 pr-12 py-2 text-sm text-white focus:outline-none focus:border-amber-500"
                            required
                          />
                          <span className="absolute right-3 top-2.5 text-xs text-neutral-500 font-bold">MT</span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Calculator Trigger / Output */}
                    <div className="border border-neutral-800 rounded-2xl bg-neutral-900/40 p-4 relative overflow-hidden">
                      {calculatedQuote ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="space-y-3"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-amber-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                              <Calculator size={13} />
                              Indicative Price Model
                            </span>
                            <button
                              type="button"
                              onClick={handleCalculate}
                              className="text-[10px] text-neutral-400 hover:text-white underline cursor-pointer"
                            >
                              Recalculate
                            </button>
                          </div>
                          
                          <div className="grid grid-cols-3 gap-2 border-b border-neutral-800/60 pb-3">
                            <div>
                              <p className="text-[10px] text-neutral-500 uppercase">Est. Cargo Value</p>
                              <p className="text-sm font-semibold font-mono text-neutral-300">${calculatedQuote.subtotal.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-[10px] text-neutral-500 uppercase">Est. Logistics</p>
                              <p className="text-sm font-semibold font-mono text-neutral-300">${calculatedQuote.logistics.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-[10px] text-neutral-500 uppercase">Insurance (All-Risk)</p>
                              <p className="text-sm font-semibold font-mono text-neutral-300">${calculatedQuote.insurance.toLocaleString()}</p>
                            </div>
                          </div>

                          <div className="flex items-baseline justify-between pt-1">
                            <div>
                              <span className="text-xs text-neutral-400 font-bold">Indicative CIF Range:</span>
                              <p className="text-[10px] text-neutral-500 mt-0.5">*Based on FOB + Freight cost structures. Subject to final spec testing.</p>
                            </div>
                            <span className="text-lg sm:text-2xl font-black font-mono text-amber-400">
                              ${calculatedQuote.totalMin.toLocaleString()} - ${calculatedQuote.totalMax.toLocaleString()}
                              <span className="text-xs text-neutral-400 font-bold ml-1">USD</span>
                            </span>
                          </div>
                        </motion.div>
                      ) : (
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-1">
                          <div className="flex items-start gap-2.5">
                            <Calculator size={18} className="text-amber-500 mt-0.5 shrink-0" />
                            <div>
                              <p className="text-xs text-neutral-200 font-semibold">Ready to check pricing estimates?</p>
                              <p className="text-[10px] text-neutral-500">Run our institutional price matrix instantly for {formData.commodity}.</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={handleCalculate}
                            disabled={isCalculating}
                            className="bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                          >
                            {isCalculating ? (
                              <span className="h-3 w-3 border-2 border-white/35 border-t-white rounded-full animate-spin"></span>
                            ) : (
                              <span>Calculate Est.</span>
                            )}
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Contact details */}
                    <div className="space-y-3">
                      <p className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold">Corporate Contact Information</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name *"
                            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                            required
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Company / Institution *"
                            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address *"
                            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                            required
                          />
                        </div>
                        <div>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number (Include country code) *"
                            className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={2}
                          placeholder="Special specifications, required certifications, packaging instructions, or shipping port destination..."
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500 resize-none"
                        />
                      </div>
                    </div>

                    {errorMsg && (
                      <div className="flex items-center gap-2 text-xs text-red-400 bg-red-950/20 border border-red-900/35 p-3 rounded-xl">
                        <AlertCircle size={14} />
                        <span>{errorMsg}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="h-4 w-4 border-2 border-neutral-950/30 border-t-neutral-950 rounded-full animate-spin"></span>
                          <span>Securing Trade Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>Submit Formal Sourcing Inquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
