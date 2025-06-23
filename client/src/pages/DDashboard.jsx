import React, { useState } from 'react';
import { ClipboardList, User, Stethoscope, FileText, Calendar, Search, Bell, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800 flex">
      {/* Mobile Sidebar Toggle */}
      <button 
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 rounded-lg text-white"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Side Navigation */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-40 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out border-r border-slate-200`}>
        <div className="p-6 h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            MedChain MD
          </h2>
          
          <nav className="space-y-2 flex-1">
            <button
              onClick={() => setActiveView('patients')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeView === 'patients' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              <User className="text-blue-500" size={20} />
              My Patients
            </button>
            <button
              onClick={() => setActiveView('appointments')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeView === 'appointments' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              <Calendar className="text-emerald-500" size={20} />
              Appointments
            </button>
            <button
              onClick={() => setActiveView('records')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeView === 'records' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              <FileText className="text-amber-500" size={20} />
              Medical Records
            </button>
            <button
              onClick={() => setActiveView('prescriptions')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeView === 'prescriptions' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'text-slate-600 hover:bg-slate-100'}`}
            >
              <ClipboardList className="text-purple-500" size={20} />
              Prescriptions
            </button>
          </nav>

          <div className="mt-auto pt-4 border-t border-slate-200">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-100">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">DR</div>
              <div>
                <p className="font-medium">Dr. Deepanshi</p>
                <p className="text-xs text-slate-500">Cardiologist</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:ml-64">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">
                {activeView === 'patients' && 'Patient Management'}
                {activeView === 'appointments' && 'Appointments'}
                {activeView === 'records' && 'Medical Records'}
                {activeView === 'prescriptions' && 'Prescriptions'}
              </h1>
              <p className="text-slate-500">
                {activeView === 'patients' && 'View and manage your patients'}
                {activeView === 'appointments' && 'Upcoming and past appointments'}
                {activeView === 'records' && 'Access complete medical histories'}
                {activeView === 'prescriptions' && 'Create and manage prescriptions'}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-500 hover:text-blue-600">
                <Bell size={20} />
              </button>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search size={18} className="absolute left-3 top-2.5 text-slate-400" />
              </div>
            </div>
          </div>

          {/* Patients View */}
          {activeView === 'patients' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-lg font-semibold">Active Patients</h2>
              </div>
              <div className="divide-y divide-slate-200">
                {patients.map((patient) => (
                  <div key={patient.id} className="p-6">
                    <div 
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => togglePatientExpansion(patient.id)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          <User size={20} />
                        </div>
                        <div>
                          <h3 className="font-medium">{patient.name}</h3>
                          <p className="text-sm text-slate-500">{patient.age} years • {patient.gender}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-slate-500">Last visit: {patient.lastVisit}</span>
                        {expandedPatient === patient.id ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                      </div>
                    </div>
                    
                    {expandedPatient === patient.id && (
                      <div className="mt-4 pl-16">
                        <div className="mb-4">
                          <h4 className="font-medium text-blue-600 mb-2">Medical History</h4>
                          <div className="space-y-3">
                            {patient.records.map((record, index) => (
                              <div key={index} className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                                <div className="flex justify-between">
                                  <span className="font-medium">{record.type}</span>
                                  <span className="text-sm text-slate-500">{record.date}</span>
                                </div>
                                <div className="mt-1 text-sm">
                                  <p><span className="font-medium">Diagnosis:</span> {record.diagnosis}</p>
                                  <p><span className="font-medium">Treatment:</span> {record.treatment}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all">
                          <Stethoscope size={18} />
                          Add Treatment Note
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Appointments View */}
          {activeView === 'appointments' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-lg font-semibold mb-6">Today's Appointments</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border border-slate-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">John Smith</h3>
                    <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">10:00 AM</span>
                  </div>
                  <p className="text-sm text-slate-500 mb-3">Follow-up for hypertension</p>
                  <div className="flex gap-2">
                    <button className="text-sm bg-blue-50 text-blue-600 px-3 py-1 rounded hover:bg-blue-100">View Chart</button>
                    <button className="text-sm bg-slate-100 text-slate-600 px-3 py-1 rounded hover:bg-slate-200">Reschedule</button>
                  </div>
                </div>
                {/* More appointment cards... */}
              </div>
            </div>
          )}

          {/* Quick Action Buttons */}
          <div className="flex justify-end gap-4 mt-8">
            <button className="flex items-center gap-2 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg transition-all shadow-sm">
              <FileText size={18} />
              New Report
            </button>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all shadow-lg">
              <ClipboardList size={18} />
              Create Prescription
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DDashboard;