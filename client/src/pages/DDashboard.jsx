import React, { useState } from 'react';
import { ClipboardList, User, Stethoscope, FileText, Calendar, Search, Bell, Menu, X, ChevronDown, ChevronRight, Share2, History, Contact } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState('patients');
  const [expandedPatient, setExpandedPatient] = useState(null);

  const patients = [
    {
      id: 1,
      name: 'John Smith',
      age: 42,
      gender: 'Male',
      lastVisit: '2023-05-15',
      contacts: [
        { name: 'Emergency Contact', phone: '+1 (555) 123-4567', relation: 'Spouse' },
        { name: 'Primary Care Physician', phone: '+1 (555) 987-6543', relation: 'Dr. Johnson' }
      ],
      sharedRecords: [
        { name: 'Cardiology Report', sharedWith: 'Dr. Anderson', date: '2023-04-10' },
        { name: 'Lab Results', sharedWith: 'City Medical Lab', date: '2023-03-22' }
      ],
      records: [
        { date: '2023-05-15', type: 'Consultation', diagnosis: 'Hypertension', treatment: 'Prescribed medication' },
        { date: '2023-03-10', type: 'Follow-up', diagnosis: 'Hypertension', treatment: 'Adjusted dosage' },
        { date: '2023-01-05', type: 'Initial Visit', diagnosis: 'Hypertension', treatment: 'Initial assessment' }
      ]
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      age: 35,
      gender: 'Female',
      lastVisit: '2023-05-10',
      contacts: [
        { name: 'Emergency Contact', phone: '+1 (555) 234-5678', relation: 'Mother' },
        { name: 'Endocrinologist', phone: '+1 (555) 876-5432', relation: 'Dr. Williams' }
      ],
      sharedRecords: [
        { name: 'Diabetes Management', sharedWith: 'Endocrinology Dept', date: '2023-05-05' },
        { name: 'Bloodwork', sharedWith: 'Central Lab', date: '2023-02-15' }
      ],
      records: [
        { date: '2023-05-10', type: 'Consultation', diagnosis: 'Type 2 Diabetes', treatment: 'Diet and exercise plan' },
        { date: '2023-02-20', type: 'Blood Test', diagnosis: 'Type 2 Diabetes', treatment: 'Lab work ordered' }
      ]
    },
    {
      id: 3,
      name: 'Michael Chen',
      age: 58,
      gender: 'Male',
      lastVisit: '2023-04-28',
      contacts: [
        { name: 'Emergency Contact', phone: '+1 (555) 345-6789', relation: 'Daughter' },
        { name: 'Rheumatologist', phone: '+1 (555) 765-4321', relation: 'Dr. Rodriguez' }
      ],
      sharedRecords: [
        { name: 'X-ray Results', sharedWith: 'Orthopedic Clinic', date: '2023-04-15' },
        { name: 'Physical Therapy Plan', sharedWith: 'Rehab Center', date: '2023-03-28' }
      ],
      records: [
        { date: '2023-04-28', type: 'Follow-up', diagnosis: 'Arthritis', treatment: 'Physical therapy referral' },
        { date: '2023-03-15', type: 'X-ray', diagnosis: 'Arthritis', treatment: 'Imaging results reviewed' }
      ]
    }
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const togglePatientExpansion = (id) => {
    setExpandedPatient(expandedPatient === id ? null : id);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 text-white flex">
      {/* Mobile Sidebar Toggle */}
      <motion.button 
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-600/80 rounded-lg backdrop-blur-sm text-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Side Navigation */}
      <motion.div 
        className={`fixed inset-y-0 left-0 w-64 bg-slate-800/90 backdrop-blur-lg z-40 border-r border-indigo-500/20`}
        initial={false}
        animate={isSidebarOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="p-6 h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
            MedChain MD
          </h2>
          
          <nav className="space-y-2 flex-1">
            <motion.button
              onClick={() => setActiveView('patients')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeView === 'patients' ? 'bg-indigo-600/50 text-white' : 'text-slate-300 hover:bg-indigo-500/20'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <User className="text-cyan-400" size={20} />
              My Patients
            </motion.button>
            <motion.button
              onClick={() => setActiveView('appointments')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeView === 'appointments' ? 'bg-indigo-600/50 text-white' : 'text-slate-300 hover:bg-indigo-500/20'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="text-indigo-300" size={20} />
              Appointments
            </motion.button>
            <motion.button
              onClick={() => setActiveView('records')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeView === 'records' ? 'bg-indigo-600/50 text-white' : 'text-slate-300 hover:bg-indigo-500/20'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileText className="text-emerald-300" size={20} />
              Medical Records
            </motion.button>
            <motion.button
              onClick={() => setActiveView('prescriptions')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeView === 'prescriptions' ? 'bg-indigo-600/50 text-white' : 'text-slate-300 hover:bg-indigo-500/20'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ClipboardList className="text-blue-300" size={20} />
              Prescriptions
            </motion.button>
          </nav>

          <div className="mt-auto pt-4 border-t border-indigo-500/20">
            <motion.div 
              className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/50"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 flex items-center justify-center text-white font-medium">DR</div>
              <div>
                <p className="font-medium">Dr. Deepanshi</p>
                <p className="text-xs text-slate-400">Cardiologist</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:ml-64">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <motion.h1 
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {activeView === 'patients' && 'Patient Management'}
                {activeView === 'appointments' && 'Appointments'}
                {activeView === 'records' && 'Medical Records'}
                {activeView === 'prescriptions' && 'Prescriptions'}
              </motion.h1>
              <motion.p 
                className="text-slate-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {activeView === 'patients' && 'View and manage your patients'}
                {activeView === 'appointments' && 'Upcoming and past appointments'}
                {activeView === 'records' && 'Access complete medical histories'}
                {activeView === 'prescriptions' && 'Create and manage prescriptions'}
              </motion.p>
            </div>
            <div className="flex items-center gap-4">
              <motion.button 
                className="p-2 text-slate-300 hover:text-cyan-400 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Bell size={20} />
              </motion.button>
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02 }}
              >
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-10 pr-4 py-2 bg-slate-700/50 border border-indigo-500/20 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder-slate-400"
                />
                <Search size={18} className="absolute left-3 top-2.5 text-slate-400" />
              </motion.div>
            </div>
          </div>

          {/* Patients View */}
          {activeView === 'patients' && (
            <motion.div 
              className="bg-slate-800/50 rounded-xl border border-indigo-500/20 backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-6 border-b border-indigo-500/20">
                <h2 className="text-xl font-semibold text-white">Active Patients</h2>
              </div>
              <div className="divide-y divide-indigo-500/20">
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
                    <motion.div 
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => togglePatientExpansion(patient.id)}
                      whileHover={{ backgroundColor: 'rgba(56, 182, 255, 0.1)' }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                          <User size={20} />
                        </div>
                        <div>
                          <h3 className="font-medium text-white">{patient.name}</h3>
                          <p className="text-sm text-slate-400">{patient.age} years • {patient.gender}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-slate-400">Last visit: {patient.lastVisit}</span>
                        {expandedPatient === patient.id ? <ChevronDown size={20} className="text-cyan-400" /> : <ChevronRight size={20} className="text-slate-400" />}
                      </div>
                    </motion.div>
                    
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
                                <div className="bg-slate-700/50 p-4 rounded-lg border border-indigo-500/20">
                                  <div className="flex items-center gap-2 mb-4">
                                    <Contact className="text-cyan-400" size={20} />
                                    <h4 className="font-medium text-cyan-400">Patient Contacts</h4>
                                  </div>
                                  <div className="space-y-3">
                                    {patient.contacts.map((contact, index) => (
                                      <div key={index} className="bg-slate-800/50 p-3 rounded border border-indigo-500/20">
                                        <p className="font-medium text-white">{contact.name}</p>
                                        <p className="text-sm text-slate-300">{contact.relation}</p>
                                        <p className="text-sm text-cyan-400 mt-1">{contact.phone}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </SwiperSlide>

                              {/* Medical History Slide */}
                              <SwiperSlide>
                                <div className="bg-slate-700/50 p-4 rounded-lg border border-indigo-500/20">
                                  <div className="flex items-center gap-2 mb-4">
                                    <History className="text-emerald-400" size={20} />
                                    <h4 className="font-medium text-emerald-400">Medical History</h4>
                                  </div>
                                  <div className="space-y-3">
                                    {patient.records.map((record, index) => (
                                      <div key={index} className="bg-slate-800/50 p-3 rounded border border-indigo-500/20">
                                        <div className="flex justify-between">
                                          <span className="font-medium text-white">{record.type}</span>
                                          <span className="text-sm text-slate-400">{record.date}</span>
                                        </div>
                                        <div className="mt-1 text-sm text-slate-300">
                                          <p><span className="font-medium">Diagnosis:</span> {record.diagnosis}</p>
                                          <p><span className="font-medium">Treatment:</span> {record.treatment}</p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </SwiperSlide>

                              {/* Shared Records Slide */}
                              <SwiperSlide>
                                <div className="bg-slate-700/50 p-4 rounded-lg border border-indigo-500/20">
                                  <div className="flex items-center gap-2 mb-4">
                                    <Share2 className="text-indigo-400" size={20} />
                                    <h4 className="font-medium text-indigo-400">Shared Records</h4>
                                  </div>
                                  <div className="space-y-3">
                                    {patient.sharedRecords.map((record, index) => (
                                      <div key={index} className="bg-slate-800/50 p-3 rounded border border-indigo-500/20">
                                        <p className="font-medium text-white">{record.name}</p>
                                        <p className="text-sm text-slate-300">Shared with: {record.sharedWith}</p>
                                        <p className="text-sm text-indigo-400 mt-1">Date shared: {record.date}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </SwiperSlide>
                            </Swiper>
                          </div>

                          <motion.button 
                            className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white px-4 py-2 rounded-lg transition-all shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Stethoscope size={18} />
                            Add Treatment Note
                          </motion.button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Appointments View */}
          {activeView === 'appointments' && (
            <motion.div 
              className="bg-slate-800/50 rounded-xl border border-indigo-500/20 backdrop-blur-sm p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold mb-6 text-white">Today's Appointments</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div 
                  className="border border-indigo-500/20 rounded-lg p-4 hover:border-cyan-300 transition-colors bg-slate-700/50 shadow-sm"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-white">John Smith</h3>
                    <span className="text-sm bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">10:00 AM</span>
                  </div>
                  <p className="text-sm text-slate-400 mb-3">Follow-up for hypertension</p>
                  <div className="flex gap-2">
                    <motion.button 
                      className="text-sm bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded hover:bg-cyan-500/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Chart
                    </motion.button>
                    <motion.button 
                      className="text-sm bg-slate-700/50 text-slate-300 px-3 py-1 rounded hover:bg-slate-700/70"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Reschedule
                    </motion.button>
                  </div>
                </motion.div>
                {/* More appointment cards... */}
              </div>
            </motion.div>
          )}

          {/* Quick Action Buttons */}
          <motion.div 
            className="flex justify-end gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <motion.button 
              className="flex items-center gap-2 bg-slate-700/50 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-4 py-2 rounded-lg transition-all shadow-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FileText size={18} />
              New Report
            </motion.button>
            <motion.button 
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white px-4 py-2 rounded-lg transition-all shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ClipboardList size={18} />
              Create Prescription
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DDashboard;