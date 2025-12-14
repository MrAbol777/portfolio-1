import React, { useState } from 'react';
import { t } from '../utils/translation';
import { getImageUrls } from '../utils/placeholderImages';
import { sanitizeInput, validateEmail } from '../utils/securityUtils';

const Contact = () => {
  const images = getImageUrls();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '2',
    message: ''
  });
  
  // Form errors
  const [errors, setErrors] = useState({});
  
  // Form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'نام الزامی است';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'ایمیل الزامی است';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'ایمیل نامعتبر است';
    }
    
    if (!formData.date) {
      newErrors.date = 'تاریخ و زمان الزامی است';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Sanitize inputs
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: formData.email,
        date: formData.date,
        guests: formData.guests,
        message: sanitizeInput(formData.message)
      };
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted:', sanitizedData);
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after success
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            date: '',
            guests: '2',
            message: ''
          });
          setSubmitSuccess(false);
        }, 3000);
      }, 1000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full opacity-5 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full opacity-5 translate-y-32 -translate-x-32"></div>
      
      <div className="container mx-auto relative z-10">
        <h2 className="section-title">{t('contactUs')}</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-primary">{t('reserveYourTable')}</h3>
            {submitSuccess ? (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-6">
                <p>رزرو شما با موفقیت ثبت شد! به زودی با شما تماس خواهیم گرفت.</p>
              </div>
            ) : null}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">{t('name')}</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input mobile-form-input ${errors.name ? 'border-red-500' : ''}`}
                  placeholder={t('name')}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">{t('email')}</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input mobile-form-input ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="example@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="date" className="block text-gray-700 mb-2 font-medium">{t('dateTime')}</label>
                <input 
                  type="datetime-local" 
                  id="date" 
                  value={formData.date}
                  onChange={handleChange}
                  className={`form-input mobile-form-input ${errors.date ? 'border-red-500' : ''}`}
                />
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
              </div>
              
              <div>
                <label htmlFor="guests" className="block text-gray-700 mb-2 font-medium">{t('numberOfGuests')}</label>
                <select 
                  id="guests" 
                  value={formData.guests}
                  onChange={handleChange}
                  className="form-input mobile-form-input"
                >
                  <option value="1">{t('guestOptions.one')}</option>
                  <option value="2">{t('guestOptions.two')}</option>
                  <option value="3">{t('guestOptions.three')}</option>
                  <option value="4">{t('guestOptions.four')}</option>
                  <option value="5">{t('guestOptions.five')}</option>
                  <option value="6+">{t('guestOptions.sixPlus')}</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">{t('specialRequests')}</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input mobile-form-input"
                  placeholder={t('specialRequests')}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`btn-primary w-full py-4 text-lg font-medium rounded-lg mobile-enhanced touch-target ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'در حال ارسال...' : t('reserveNow')}
              </button>
            </form>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 text-primary">{t('visitUs')}</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 text-primary ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  {t('address')}
                </h4>
                <p className="text-gray-600 whitespace-pre-line">{t('addressDetails')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 text-primary ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {t('hours')}
                </h4>
                <p className="text-gray-600">
                  {t('hoursDetails.weekdays')}<br />
                  {t('hoursDetails.friSat')}<br />
                  {t('hoursDetails.sunday')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 text-primary ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  {t('contactInfo')}
                </h4>
                <p className="text-gray-600">
                  {t('phone')}<br />
                  {t('email')}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md card-hover">
                <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <svg className="w-5 h-5 text-primary ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
                  </svg>
                  {t('findUs')}
                </h4>
                <div className="relative overflow-hidden rounded-xl w-full h-64">
                  <img 
                    src={images.contact} 
                    alt={t('findUs')} 
                    className="rounded-xl w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;