import React, { useState } from 'react';
import { ClipboardList, User, Stethoscope, FileText, Calendar, Search, Bell, Menu, X, ChevronDown, ChevronRight, Share2, History, Contact, Lock, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeView, setActiveView] = useState('patients');
  const [expandedPatient, setExpandedPatient] = useState(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [shareDays, setShareDays] = useState(7);
  const [shareDescription, setShareDescription] = useState('');
  const [showContactsDropdown, setShowContactsDropdown] = useState(false);
  const [selectedContacts, setSelectedContacts] = useState([]);

  const patients = [
    {
      id: 1,
      name: 'John Smith',
      age: 42,
      gender: 'Male',
      lastVisit: '2023-05-15',
      contacts: [
        { id: 1, name: 'Emergency Contact', phone: '+1 (555) 123-4567', relation: 'Spouse' },
        { id: 2, name: 'Primary Care Physician', phone: '+1 (555) 987-6543', relation: 'Dr. Johnson' }
      ],
      sharedRecords: [
        { id: 1, name: 'Cardiology Report', sharedWith: 'Dr. Anderson', date: '2023-04-10' },
        { id: 2, name: 'Lab Results', sharedWith: 'City Medical Lab', date: '2023-03-22' }
      ],
      records: [
        { id: 1, date: '2023-05-15', type: 'Consultation', diagnosis: 'Hypertension', treatment: 'Prescribed medication' },
        { id: 2, date: '2023-03-10', type: 'Follow-up', diagnosis: 'Hypertension', treatment: 'Adjusted dosage' },
        { id: 3, date: '2023-01-05', type: 'Initial Visit', diagnosis: 'Hypertension', treatment: 'Initial assessment' }
      ]
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      age: 35,
      gender: 'Female',
      lastVisit: '2023-05-10',
      contacts: [
        { id: 3, name: 'Emergency Contact', phone: '+1 (555) 234-5678', relation: 'Mother' },
        { id: 4, name: 'Endocrinologist', phone: '+1 (555) 876-5432', relation: 'Dr. Williams' }
      ],
      sharedRecords: [
        { id: 3, name: 'Diabetes Management', sharedWith: 'Endocrinology Dept', date: '2023-05-05' },
        { id: 4, name: 'Bloodwork', sharedWith: 'Central Lab', date: '2023-02-15' }
      ],
      records: [
        { id: 4, date: '2023-05-10', type: 'Consultation', diagnosis: 'Type 2 Diabetes', treatment: 'Diet and exercise plan' },
        { id: 5, date: '2023-02-20', type: 'Blood Test', diagnosis: 'Type 2 Diabetes', treatment: 'Lab work ordered' }
      ]
    }
  ];

  const allContacts = [
    { id: 1, name: 'Dr. Anderson', specialty: 'Cardiology', type: 'Physician' },
    { id: 2, name: 'City Medical Lab', specialty: 'Laboratory', type: 'Facility' },
    { id: 3, name: 'Dr. Williams', specialty: 'Endocrinology', type: 'Physician' },
    { id: 4, name: 'Central Lab', specialty: 'Laboratory', type: 'Facility' }
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const togglePatientExpansion = (id) => {
    setExpandedPatient(expandedPatient === id ? null : id);
  };

  const openShareModal = (record) => {
    setSelectedRecord(record);
    setShowShareModal(true);
    setSelectedContacts([]);
    setShareDays(7);
    setShareDescription('');
  };

  const closeShareModal = () => {
    setShowShareModal(false);
    setSelectedRecord(null);
  };

  const toggleContactSelection = (contact) => {
    setSelectedContacts(prev => {
      if (prev.some(c => c.id === contact.id)) {
        return prev.filter(c => c.id !== contact.id);
      } else {
        return [...prev, contact];
      }
    });
  };

  const confirmShare = () => {
    if (!selectedRecord || selectedContacts.length === 0) return;
    
    // In a real app, this would update the patient's sharedRecords
    alert(`Successfully shared ${selectedRecord.type} record with ${selectedContacts.length} contact(s) for ${shareDays} days`);
    
    closeShareModal();
  };

  // Animation variants
  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' }
  };

  const patientCardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0 }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex">
      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-600 rounded-lg text-white shadow-md"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Side Navigation */}
      <motion.div 
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-40 border-r border-gray-200`}
        initial={false}
        animate={isSidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="p-6 h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            MedChain MD
          </h2>
          
          <nav className="space-y-2 flex-1">
            <button
              onClick={() => setActiveView('patients')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeView === 'patients' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <User className="text-indigo-600" size={20} />
              My Patients
            </button>
            <button
              onClick={() => setActiveView('appointments')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeView === 'appointments' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <Calendar className="text-indigo-600" size={20} />
              Appointments
            </button>
            <button
              onClick={() => setActiveView('records')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeView === 'records' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <FileText className="text-indigo-600" size={20} />
              Medical Records
            </button>
            <button
              onClick={() => setActiveView('prescriptions')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeView === 'prescriptions' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <ClipboardList className="text-indigo-600" size={20} />
              Prescriptions
            </button>
          </nav>

          <div className="mt-auto pt-4 border-t border-gray-200">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-medium">DR</div>
              <div>
                <p className="font-medium">Dr. Deepanshi</p>
                <p className="text-xs text-gray-500">Cardiologist</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-0'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-gray-800">
                {activeView === 'patients' && 'Patient Management'}
                {activeView === 'appointments' && 'Appointments'}
                {activeView === 'records' && 'Medical Records'}
                {activeView === 'prescriptions' && 'Prescriptions'}
              </h1>
              <p className="text-gray-500">
                {activeView === 'patients' && 'View and manage your patients'}
                {activeView === 'appointments' && 'Upcoming and past appointments'}
                {activeView === 'records' && 'Access complete medical histories'}
                {activeView === 'prescriptions' && 'Create and manage prescriptions'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-500 hover:text-indigo-600 rounded-full hover:bg-gray-100">
                <Bell size={20} />
              </button>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-gray-400"
                />
                <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Patients View */}
          {activeView === 'patients' && (
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">Active Patients</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {patients.map((patient) => (
                  <motion.div 
                    key={patient.id} 
                    className="p-6"
                    variants={patientCardVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                  >
                    <div 
                      className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
                      onClick={() => togglePatientExpansion(patient.id)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                          <User size={20} />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">{patient.name}</h3>
                          <p className="text-sm text-gray-500">{patient.age} years • {patient.gender}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">Last visit: {patient.lastVisit}</span>
                        {expandedPatient === patient.id ? 
                          <ChevronDown size={20} className="text-indigo-600" /> : 
                          <ChevronRight size={20} className="text-gray-500" />}
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {expandedPatient === patient.id && (
                        <motion.div 
                          className="mt-4 pl-16 overflow-x-hidden"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Patient Details Slider */}
                          <div className="mb-6 w-full max-w-[calc(100vw-24rem)]">
                            <Swiper
                              modules={[Navigation, Pagination]}
                              spaceBetween={20}
                              slidesPerView={1}
                              navigation
                              pagination={{ clickable: true }}
                              className="rounded-lg overflow-hidden"
                              style={{ width: '100%' }}
                            >
                              {/* Contacts Slide */}
                              <SwiperSlide>
                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                  <div className="flex items-center gap-2 mb-4">
                                    <Contact className="text-indigo-600" size={20} />
                                    <h4 className="font-medium text-indigo-600">Patient Contacts</h4>
                                  </div>
                                  <div className="space-y-3">
                                    {patient.contacts.map((contact, index) => (
                                      <div key={index} className="bg-white p-3 rounded border border-gray-200 shadow-xs">
                                        <p className="font-medium text-gray-800">{contact.name}</p>
                                        <p className="text-sm text-gray-600">{contact.relation}</p>
                                        <p className="text-sm text-indigo-600 mt-1">{contact.phone}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </SwiperSlide>

                              {/* Medical History Slide */}
                              <SwiperSlide>
                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                  <div className="flex items-center gap-2 mb-4">
                                    <History className="text-indigo-600" size={20} />
                                    <h4 className="font-medium text-indigo-600">Medical History</h4>
                                  </div>
                                  <div className="space-y-3">
                                    {patient.records.map((record, index) => (
                                      <div key={index} className="bg-white p-3 rounded border border-gray-200 shadow-xs">
                                        <div className="flex justify-between">
                                          <span className="font-medium text-gray-800">{record.type}</span>
                                          <span className="text-sm text-gray-500">{record.date}</span>
                                        </div>
                                        <div className="mt-1 text-sm text-gray-600">
                                          <p><span className="font-medium">Diagnosis:</span> {record.diagnosis}</p>
                                          <p><span className="font-medium">Treatment:</span> {record.treatment}</p>
                                        </div>
                                        <div className="mt-2 flex justify-end">
                                          <button 
                                            onClick={() => openShareModal(record)}
                                            className="text-xs flex items-center gap-1 text-indigo-600 hover:text-indigo-800"
                                          >
                                            <Share2 size={14} />
                                            Share Record
                                          </button>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </SwiperSlide>

                              {/* Shared Records Slide */}
                              <SwiperSlide>
                                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                  <div className="flex items-center gap-2 mb-4">
                                    <Share2 className="text-indigo-600" size={20} />
                                    <h4 className="font-medium text-indigo-600">Shared Records</h4>
                                  </div>
                                  <div className="space-y-3">
                                    {patient.sharedRecords.map((record, index) => (
                                      <div key={index} className="bg-white p-3 rounded border border-gray-200 shadow-xs">
                                        <p className="font-medium text-gray-800">{record.name}</p>
                                        <p className="text-sm text-gray-600">Shared with: {record.sharedWith}</p>
                                        <p className="text-sm text-indigo-600 mt-1">Date shared: {record.date}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </SwiperSlide>
                            </Swiper>
                          </div>

                          <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all">
                            <Stethoscope size={18} />
                            Add Treatment Note
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Appointments View */}
          {activeView === 'appointments' && (
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Today's Appointments</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors bg-white shadow-xs">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-800">John Smith</h3>
                    <span className="text-sm bg-indigo-100 text-indigo-800 px-2 py-1 rounded">10:00 AM</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Follow-up for hypertension</p>
                  <div className="flex gap-2">
                    <button className="text-sm bg-indigo-100 text-indigo-800 px-3 py-1 rounded hover:bg-indigo-200">
                      View Chart
                    </button>
                    <button className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded hover:bg-gray-200">
                      Reschedule
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Quick Action Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <button className="flex items-center gap-2 bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-lg shadow-xs hover:shadow-sm transition-all">
              <FileText size={18} />
              New Report
            </button>
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all">
              <ClipboardList size={18} />
              Create Prescription
            </button>
          </div>
        </div>
      </div>

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-6 w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800">Share Medical Record</h3>
              <button onClick={closeShareModal} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-2xl text-indigo-600">
                  <FileText size={24} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">{selectedRecord?.type}</p>
                  <p className="text-xs text-gray-500">Date: {selectedRecord?.date}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Share with medical contacts</label>
              <div className="relative">
                <button 
                  onClick={() => setShowContactsDropdown(!showContactsDropdown)}
                  className="w-full flex justify-between items-center p-2 border border-gray-300 rounded-lg bg-white"
                >
                  <span>
                    {selectedContacts.length > 0 
                      ? `${selectedContacts.length} selected` 
                      : "Select contacts"}
                  </span>
                  {showContactsDropdown ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                
                {showContactsDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                    {allContacts.map(contact => (
                      <div 
                        key={contact.id}
                        onClick={() => toggleContactSelection(contact)}
                        className={`p-3 hover:bg-gray-100 cursor-pointer flex items-center gap-3 ${selectedContacts.some(c => c.id === contact.id) ? 'bg-indigo-50' : ''}`}
                      >
                        <input 
                          type="checkbox" 
                          checked={selectedContacts.some(c => c.id === contact.id)}
                          readOnly
                          className="rounded text-indigo-600"
                        />
                        <div>
                          <p className="font-medium text-sm text-gray-800">{contact.name}</p>
                          <p className="text-xs text-gray-500">{contact.specialty} • {contact.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Access Duration (days)</label>
              <input
                type="number"
                min="1"
                max="365"
                value={shareDays}
                onChange={(e) => setShareDays(Math.max(1, Math.min(365, parseInt(e.target.value) || 1)))}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Purpose (optional)</label>
              <textarea
                value={shareDescription}
                onChange={(e) => setShareDescription(e.target.value)}
                placeholder="Add a note about why you're sharing this record..."
                className="w-full p-2 border border-gray-300 rounded-lg h-20"
              />
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <Lock size={16} className="text-indigo-600" />
              <span>This record will be encrypted and accessible only to selected contacts</span>
            </div>
            
            <div className="flex justify-end gap-3">
              <button
                onClick={closeShareModal}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmShare}
                disabled={selectedContacts.length === 0}
                className={`px-4 py-2 rounded-lg text-white transition-colors ${selectedContacts.length === 0 ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
              >
                Share Record
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default DDashboard;