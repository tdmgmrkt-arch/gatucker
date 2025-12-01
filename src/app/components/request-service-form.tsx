"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const serviceOptions = [
  "Background Checks",
  "Investigations",
  "Missing Persons",
  "Child Custody",
  "Infidelity",
  "Risk Management",
  "Consulting",
  "Profiling"
];

const contactTypeOptions = [
  "Call",
  "Email",
  "Virtual",
  "Other"
];

interface RequestServiceFormProps {
  defaultService?: string;
}

export function RequestServiceForm({ defaultService }: RequestServiceFormProps = {}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    services: defaultService ? [defaultService] : [] as string[],
    contactType: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.contactType) {
      newErrors.contactType = 'Please select a preferred contact type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Dummy API endpoint - replace with actual Lead Connector/Go HighLevel webhook URL
      const response = await fetch('https://example.com/api/lead-connector-webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          services: [],
          contactType: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black/90 border-2 border-[#CEA53D]/30 rounded-xl p-6 md:p-8 max-w-5xl mx-auto"
      style={{ boxShadow: '0 0 30px rgba(255, 215, 0, 0.25), inset 0 0 50px rgba(255, 215, 0, 0.05)' }}
    >
      {/* Full Name */}
      <div className="mb-4">
        <label className="block mb-3">
          <span className="text-[#FFFF] uppercase tracking-wider text-sm font-bold mb-2 block" style={{ fontFamily: "'Inter', sans-serif" }}>
            Full Name <span className="text-[#EB0A08]">*</span>
          </span>
          <div className="grid md:grid-cols-2 gap-3">
            <div>
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full bg-black border-2 border-[#CEA53D]/30 rounded-lg px-3 py-2 text-[#EDEDED] placeholder:text-[#EDEDED]/40 focus:border-[#CEA53D] focus:outline-none transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              {errors.firstName && (
                <p className="text-[#EB0A08] text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.firstName}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full bg-black border-2 border-[#CEA53D]/30 rounded-lg px-3 py-2 text-[#EDEDED] placeholder:text-[#EDEDED]/40 focus:border-[#CEA53D] focus:outline-none transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              {errors.lastName && (
                <p className="text-[#EB0A08] text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>
        </label>
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <label className="block">
          <span className="text-[#FFFF] uppercase tracking-wider text-sm font-bold mb-2 block" style={{ fontFamily: "'Inter', sans-serif" }}>
            Phone Number <span className="text-[#EB0A08]">*</span>
          </span>
          <input
            type="tel"
            placeholder="(000) 000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-black border-2 border-[#CEA53D]/30 rounded-lg px-3 py-2 text-[#EDEDED] placeholder:text-[#EDEDED]/40 focus:border-[#CEA53D] focus:outline-none transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
          {errors.phone && (
            <p className="text-[#EB0A08] text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.phone}
            </p>
          )}
        </label>
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block">
          <span className="text-[#FFFF] uppercase tracking-wider text-sm font-bold mb-2 block" style={{ fontFamily: "'Inter', sans-serif" }}>
            Email Address <span className="text-[#EB0A08]">*</span>
          </span>
          <input
            type="email"
            placeholder="example@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-black border-2 border-[#CEA53D]/30 rounded-lg px-3 py-2 text-[#EDEDED] placeholder:text-[#EDEDED]/40 focus:border-[#CEA53D] focus:outline-none transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
          {errors.email && (
            <p className="text-[#EB0A08] text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.email}
            </p>
          )}
        </label>
      </div>

      {/* Service Checkboxes */}
      <div className="mb-4">
        <span className="text-[#FFFF] uppercase tracking-wider text-sm font-bold mb-2 block" style={{ fontFamily: "'Inter', sans-serif" }}>
          Service
        </span>
        <div className="grid md:grid-cols-2 gap-2">
          {serviceOptions.map((service) => (
            <label
              key={service}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  checked={formData.services.includes(service)}
                  onChange={() => handleServiceToggle(service)}
                  className="sr-only"
                />
                <div
                  className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center transition-all ${
                    formData.services.includes(service)
                      ? 'border-[#CEA53D] bg-[#CEA53D]'
                      : 'border-[#CEA53D]/30 bg-black group-hover:border-[#CEA53D]'
                  }`}
                  style={{ boxShadow: formData.services.includes(service) ? '0 0 10px rgba(255, 215, 0, 0.5)' : 'none' }}
                >
                  {formData.services.includes(service) && (
                    <CheckCircle className="w-4 h-4 text-black" strokeWidth={3} />
                  )}
                </div>
              </div>
              <span className="text-[#EDEDED] text-sm font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                {service}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Contact Type Dropdown */}
      <div className="mb-4">
        <label className="block">
          <span className="text-[#FFFF] uppercase tracking-wider text-sm font-bold mb-2 block" style={{ fontFamily: "'Inter', sans-serif" }}>
            Preferred Contact Type <span className="text-[#EB0A08]">*</span>
          </span>
          <select
            value={formData.contactType}
            onChange={(e) => setFormData({ ...formData, contactType: e.target.value })}
            className="w-full bg-black border-2 border-[#CEA53D]/30 rounded-lg px-3 py-2 text-[#EDEDED] focus:border-[#CEA53D] focus:outline-none transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <option value="">Select contact type</option>
            {contactTypeOptions.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.contactType && (
            <p className="text-[#EB0A08] text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {errors.contactType}
            </p>
          )}
        </label>
      </div>

      {/* Message Textarea */}
      <div className="mb-4">
        <label className="block">
          <span className="text-[#FFFF] uppercase tracking-wider text-sm font-bold mb-2 block" style={{ fontFamily: "'Inter', sans-serif" }}>
            Message (Optional)
          </span>
          <textarea
            placeholder="Additional details or notes..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={3}
            className="w-full bg-black border-2 border-[#CEA53D]/30 rounded-lg px-3 py-2 text-[#EDEDED] placeholder:text-[#EDEDED]/40 focus:border-[#CEA53D] focus:outline-none transition-colors resize-none"
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
        </label>
      </div>

      {/* Important Notes */}
      <div className="mb-5 p-3 border-2 border-[#CEA53D]/30 rounded-lg bg-[#CEA53D]/5">
        <p className="text-[#EDEDED]/80 text-xs font-light leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
          <strong className="text-[#CEA53D]">Important:</strong> For all virtual consultations, we will contact you to schedule a day and time.
        </p>
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="relative px-8 py-3 bg-black border-4 border-[#CEA53D] font-black text-[#CEA53D] uppercase tracking-wider transition-all duration-300 hover:bg-[#CEA53D] hover:text-black hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-black disabled:hover:text-[#CEA53D] flex items-center gap-3 mx-auto"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
            boxShadow: '0 0 30px rgba(255, 215, 0, 0.6), inset 0 0 20px rgba(255, 215, 0, 0.2)',
          }}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            'Request Service'
          )}
        </button>
      </div>

      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 border-2 border-[#CEA53D] rounded-lg bg-[#CEA53D]/10 flex items-center gap-3"
        >
          <CheckCircle className="w-4 h-4 text-[#CEA53D]" />
          <p className="text-[#CEA53D] font-semibold text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            Request submitted successfully! We&apos;ll contact you soon.
          </p>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 border-2 border-[#EB0A08] rounded-lg bg-[#EB0A08]/10 flex items-center gap-3"
        >
          <AlertCircle className="w-4 h-4 text-[#EB0A08]" />
          <p className="text-[#EB0A08] font-semibold text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
            Something went wrong. Please try again or call us directly.
          </p>
        </motion.div>
      )}
    </motion.form>
  );
}
