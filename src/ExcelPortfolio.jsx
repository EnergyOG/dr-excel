import React, { useState, useEffect, useRef } from "react";
import {
  FileSpreadsheet,
  TrendingUp,
  Calculator,
  BarChart3,
  Zap,
  FileText,
  GraduationCap,
  CheckCircle,
  Mail,
  Phone,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import financialMSImage from "./assets/financial-management-system.jpg";
import inventoryMSImage from "./assets/inventory-management-system.jpg";
import invoiceGeneratorImage from "./assets/Invoice&Quote-Generator.jpg";
import projectEstimatorImage from "./assets/project-cost-estimator.jpg";
import salesDashboardImage from "./assets/sales-analytics-dashboard.jpg";
import employeeTimesheetImage from "./assets/employee-timesheet-tracker.jpg";
import bgImage from "../public/bg-img.mp4";

const ExcelPortfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [typedText, setTypedText] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const fullText = "DR.EXCEL";

  const formRef = useRef();

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: "",
  });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      icon: <FileSpreadsheet size={40} />,
      title: "Custom Excel Spreadsheet Development",
      description:
        "Tailored solutions designed specifically for your business needs and workflows.",
    },
    {
      icon: <Calculator size={40} />,
      title: "Automated Calculations and Formulas",
      description:
        "Complex formulas and automation to eliminate manual calculations and reduce errors.",
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Dashboard and Reports",
      description:
        "Interactive dashboards with real-time data visualization for better decision-making.",
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Data Cleaning and Organization",
      description:
        "Transform messy data into organized, actionable information.",
    },
    {
      icon: <Zap size={40} />,
      title: "Process Automation",
      description:
        "Automate repetitive tasks to save time and increase productivity.",
    },
    {
      icon: <FileText size={40} />,
      title: "Business Templates",
      description:
        "Professional templates for invoices, budgets, cost estimates, and timesheets.",
    },
    {
      icon: <GraduationCap size={40} />,
      title: "Excel Training and Support",
      description:
        "Comprehensive training to empower your team with Excel expertise.",
    },
  ];

  const benefits = [
    "Saves time and reduce manual work",
    "Improve accuracy and decision-making",
    "Custom Solutions tailored to your needs",
    "Affordable Alternative to Expensive Software",
    "Working faster and smarter with fewer errors",
  ];

  const projects = [
    {
      title: "Financial Dashboard",
      image: financialMSImage,
      description:
        "Automated financial reporting system with real-time KPI tracking and budget analysis.",
      features: ["Automated Reports", "Data Visualization", "Budget Tracking"],
    },
    {
      title: "Inventory Management System",
      image: inventoryMSImage,
      description:
        "Complete inventory tracking with automated reorder alerts and supplier management.",
      features: ["Stock Tracking", "Auto Alerts", "Supplier Database"],
    },
    {
      title: "Employee Timesheet Tracker",
      image: employeeTimesheetImage,
      description:
        "Automated timesheet system with payroll calculations and attendance monitoring.",
      features: ["Time Tracking", "Payroll Calc", "Reports"],
    },
    {
      title: "Sales Analytics Dashboard",
      image: salesDashboardImage,
      description:
        "Comprehensive sales tracking with performance metrics and trend analysis.",
      features: ["Sales Tracking", "Performance Metrics", "Forecasting"],
    },
    {
      title: "Project Cost Estimator",
      image: projectEstimatorImage,
      description:
        "Dynamic cost estimation tool with material tracking and labor calculations.",
      features: ["Cost Analysis", "Material Tracking", "Templates"],
    },
    {
      title: "Invoice & Quote Generator",
      image: invoiceGeneratorImage,
      description:
        "Professional invoice system with automated calculations and client database.",
      features: ["Auto Invoicing", "Client Database", "PDF Export"],
    },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false, message: "" });

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setFormStatus({
          loading: false,
          success: true,
          error: false,
          message: "Message sent successfully! I'll get back to you soon.",
        });
        formRef.current.reset();
        setTimeout(
          () =>
            setFormStatus({
              loading: false,
              success: false,
              error: false,
              message: "",
            }),
          5000
        );
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setFormStatus({
          loading: false,
          success: false,
          error: true,
          message:
            "Failed to send message. Please email me directly at alfredpeprah@hotmail.com",
        });
        setTimeout(
          () =>
            setFormStatus({
              loading: false,
              success: false,
              error: false,
              message: "",
            }),
          5000
        );
      });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="text-green-600" size={32} />
            <span className="text-2xl font-bold text-gray-900">DR.EXCEL</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-900"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="flex flex-col p-6 gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("benefits")}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium text-left"
              >
                Benefits
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-gray-700 hover:text-green-600 transition-colors font-medium text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden"
      >
        {/* Background Video (Right Corner) */}
        <div className="absolute right-0 bottom-50 w-[35%] h-[70%] hidden md:block pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-100"
          >
            <source src={bgImage} type="video/mp4" />
          </video>

          {/* Optional soft gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-green-100 rounded-full">
            <FileSpreadsheet className="text-green-600" size={24} />
            <span className="text-green-700 font-semibold">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            Excel Spreadsheet
            <br />
            <span className="text-green-600">Development</span>
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-gray-700 font-semibold">
            And Business Automation
          </p>

          <p className="text-lg md:text-xl mb-12 text-gray-600 max-w-3xl mx-auto">
            Professional Excel solutions to streamline your business processes,
            automate workflows, and improve decision-making with custom
            spreadsheets and templates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection("services")}
              className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold transition-all transform hover:scale-105 hover:bg-green-700 shadow-lg"
            >
              View Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 bg-white text-green-600 border-2 border-green-600 rounded-lg font-semibold transition-all hover:bg-green-50"
            >
              Get Started
            </button>
          </div>

          <div className="text-sm mb-4 text-gray-500">Scroll Down</div>
          <ChevronDown
            className="mx-auto animate-bounce text-green-600"
            size={32}
          />
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="min-h-screen flex items-center justify-center px-6 py-20 bg-white"
      >
        <div className="max-w-7xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Our <span className="text-green-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive Excel solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-gradient-to-br from-green-50 to-white border border-green-100 hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="text-green-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-green-600 to-green-700"
      >
        <div className="max-w-6xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Why Choose Us?
            </h2>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              WORKING FASTER AND SMARTER WITH FEWER ERRORS!!!!!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <CheckCircle
                  className="text-white flex-shrink-0 mt-1"
                  size={28}
                />
                <p className="text-lg text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-6 py-20 bg-white"
      >
        <div className="max-w-7xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Featured <span className="text-green-600">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Examples of custom Excel solutions we've developed for businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden bg-white border border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700 font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-50 to-green-50"
      >
        <div className="max-w-4xl w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Get In <span className="text-green-600">Touch</span>
            </h2>
            <p className="text-lg text-gray-600">
              Ready to automate your business processes? Let's talk!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="https://wa.me/18603871944"
              className="p-8 rounded-xl bg-white border border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-2 flex items-center gap-6"
            >
              <div className="p-4 bg-green-100 rounded-full">
                <Phone className="text-green-600" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  WhatsApp
                </h3>
                <p className="text-green-600 font-semibold">+1 860 387 1944</p>
              </div>
            </a>

            <a
              href="mailto:alfredpeprah@hotmail.com"
              className="p-8 rounded-xl bg-white border border-gray-200 hover:shadow-xl transition-all transform hover:-translate-y-2 flex items-center gap-6"
            >
              <div className="p-4 bg-green-100 rounded-full">
                <Mail className="text-green-600" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <p className="text-green-600 font-semibold break-all">
                  alfredpeprah@hotmail.com
                </p>
              </div>
            </a>
          </div>

          <div className="p-8 rounded-xl bg-white border border-gray-200 shadow-xl">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              {formStatus.message && (
                <div
                  className={`p-4 rounded-lg ${
                    formStatus.success
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 border-2 border-gray-200 focus:border-green-600 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 border-2 border-gray-200 focus:border-green-600 outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Project Details
                </label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-900 border-2 border-gray-200 focus:border-green-600 outline-none resize-none transition-all"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={formStatus.loading}
                className={`w-full py-4 rounded-lg font-semibold transition-all transform shadow-lg ${
                  formStatus.loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 text-white hover:bg-green-700 hover:scale-105"
                }`}
              >
                {formStatus.loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-900 text-gray-300 border-t border-gray-800">
        <div className="flex items-center justify-center gap-2 mb-4">
          <FileSpreadsheet className="text-green-500" size={24} />
          <span className="text-xl font-bold text-white">DR.EXCEL</span>
        </div>
        <p className="mb-2">&copy; 2025 Dr.Excel. All rights reserved.</p>
        <p className="text-sm text-gray-400">
          Excel Spreadsheet Development and Business Automation
        </p>
      </footer>
    </div>
  );
};

export default ExcelPortfolio;
