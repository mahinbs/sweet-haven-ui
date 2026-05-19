import { AnimatedSection } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState, useRef } from "react";
import { 
  Briefcase, 
  Mail, 
  MapPin, 
  Award, 
  Users, 
  Heart, 
  Sparkles, 
  Clock, 
  ChevronRight, 
  Send,
  UploadCloud
} from "lucide-react";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const jobsList: Job[] = [
  {
    id: "pastry-chef",
    title: "Master Pastry Chef",
    department: "Kitchen Operations",
    location: "Aligarh Facility",
    type: "Full-Time",
    description: "Lead our creative pastry division to conceptualize, design, and produce premium cakes, croissants, and celebration sweets. Ensure high quality, sanitation, and consistency.",
    requirements: [
      "5+ years of experience in high-end commercial baking or pastry arts.",
      "In-depth knowledge of French pastry techniques and Indian fusion flavors.",
      "Strong leadership and kitchen management skills."
    ]
  },
  {
    id: "qa-executive",
    title: "Quality Assurance Executive",
    department: "Plant Operations",
    location: "Aligarh Facility",
    type: "Full-Time",
    description: "Monitor and evaluate all raw ingredients, production line processes, and packaging standards to guarantee our safety, hygiene, and taste benchmarks are met at all times.",
    requirements: [
      "Degree in Food Science, Microbiology, or related field.",
      "Familiarity with ISO, HACCP, and FSSAI guidelines.",
      "High attention to detail and rigorous auditing skills."
    ]
  },
  {
    id: "sales-manager",
    title: "Territory Sales Manager",
    department: "Sales & Distribution",
    location: "Western UP Region",
    type: "Full-Time",
    description: "Grow Honey Gold's retail footprint and wholesale distribution channels. Strengthen relationships with local distributors, grocery chains, and key wholesale partners.",
    requirements: [
      "3+ years of experience in FMCG or food product sales.",
      "Strong negotiation, communication, and regional market network.",
      "Willingness to travel locally within the territory."
    ]
  },
  {
    id: "cake-decorator",
    title: "Cake Decorator & Artist",
    department: "Custom Celebrations",
    location: "Aligarh Facility",
    type: "Full-Time",
    description: "Design and execute beautiful, intricate custom cakes for birthdays, weddings, and special events using fondant, buttercream, and modern decorating mediums.",
    requirements: [
      "Proven portfolio of custom cake designs and sugarcraft.",
      "Experience working with fondant, sculpting, and colors.",
      "Ability to work efficiently under tight delivery deadlines."
    ]
  }
];

export const CareersPage = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resumeLink: ""
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleApplyClick = (jobTitle: string) => {
    setFormData(prev => ({ ...prev, position: jobTitle }));
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!resumeFile && !formData.resumeLink.trim()) {
      toast({
        title: "Resume Required",
        description: "Please upload your resume PDF or provide a web link to your resume.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      toast({
        title: "Application Submitted Successfully!",
        description: `Thank you, ${formData.name}! Our HR team will review your application for the ${formData.position} position.`,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
        resumeLink: ""
      });
      setResumeFile(null);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="overflow-hidden bg-[#FFFBF6] text-[#5F4B3C]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#FFE8CF] via-[#FFF4E6] to-white py-20 md:py-28">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 text-center md:flex-row md:text-left">
          <AnimatedSection animation="slide-left" className="space-y-6 md:w-1/2">
            <span className="inline-flex rounded-full bg-[#E93354]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#E93354]">
              Join Our Family
            </span>
            <h1 className="font-lilita text-4xl font-extrabold text-[#111] md:text-6xl leading-tight">
              Bake a Sweet <br />
              <span className="text-[#E93354]">Career With Us.</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[#5F4B3C]/95">
              At Honey Gold, we build careers around passion, teamwork, and delicious craft. Bring your unique skills to a brand that delivers happiness in every bite.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button 
                onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth" })}
                className="rounded-full px-8 py-6 bg-[#E93354] hover:bg-[#c72944] text-white font-baloo text-base font-semibold shadow-md transition-transform duration-200 hover:scale-105"
              >
                Apply Now
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  const el = document.getElementById("open-positions");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full border-[#E8D8C6] px-8 py-6 text-[#5F4B3C] bg-white font-baloo text-base font-semibold shadow-sm transition-transform duration-200 hover:scale-105"
              >
                View Positions
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right" className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-[#E93354]/10 blur-3xl opacity-60" aria-hidden />
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
                alt="Bakery chefs preparing fresh artisan bread dough"
                className="relative mx-auto h-72 w-full max-w-md rounded-[2rem] object-cover shadow-[0_20px_50px_rgba(233,51,84,0.15)] sm:h-96"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-[#E93354] text-xs uppercase tracking-[0.35em] font-semibold">Our Culture</p>
            <h2 className="font-lilita text-3xl font-extrabold text-[#111] md:text-5xl">Why You'll Love It Here</h2>
            <p className="text-[#6C5A4A] text-base md:text-lg">
              We respect tradition, drive innovation, and offer a workspace where you can rise to your full potential.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatedSection animation="slide-up" delay={0}>
              <div className="h-full p-8 rounded-3xl border border-[#F0E5D8] bg-[#FFFBF6] transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#E93354]/10 text-[#E93354] mb-6">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="font-baloo text-xl font-bold text-[#111] mb-2">Artisan Integrity</h3>
                <p className="text-sm text-[#6C5A4A] leading-relaxed">
                  We craft goods with clean ingredients and hygienic processes, ensuring authentic flavor and zero compromises.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={100}>
              <div className="h-full p-8 rounded-3xl border border-[#F0E5D8] bg-[#FFFBF6] transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#E93354]/10 text-[#E93354] mb-6">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="font-baloo text-xl font-bold text-[#111] mb-2">Creative Freedom</h3>
                <p className="text-sm text-[#6C5A4A] leading-relaxed">
                  Innovate with new flavor fusions, decoration styles, and packaging ideas in our creative lab environments.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <div className="h-full p-8 rounded-3xl border border-[#F0E5D8] bg-[#FFFBF6] transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#E93354]/10 text-[#E93354] mb-6">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-baloo text-xl font-bold text-[#111] mb-2">One Warm Team</h3>
                <p className="text-sm text-[#6C5A4A] leading-relaxed">
                  We treat our teammates like family, fostering collaborative shifts, mutual support, and mutual respect.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={300}>
              <div className="h-full p-8 rounded-3xl border border-[#F0E5D8] bg-[#FFFBF6] transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[#E93354]/10 text-[#E93354] mb-6">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="font-baloo text-xl font-bold text-[#111] mb-2">Sweet Perks</h3>
                <p className="text-sm text-[#6C5A4A] leading-relaxed">
                  Enjoy competitive compensation, medical policies, continuous bakery training, and fresh product packages.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 bg-[#FFFBF6]">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-[#E93354] text-xs uppercase tracking-[0.35em] font-semibold">Active Openings</p>
            <h2 className="font-lilita text-3xl font-extrabold text-[#111] md:text-5xl">Explore Open Positions</h2>
            <p className="text-[#6C5A4A]">
              Find the perfect role to showcase your talents and help us share goodness.
            </p>
          </div>

          <div className="space-y-6">
            {jobsList.map((job) => (
              <AnimatedSection key={job.id} animation="slide-up">
                <div className="group rounded-3xl border border-[#F0E5D8] bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F0E5D8]/60 pb-4">
                    <div>
                      <h3 className="font-baloo text-2xl font-bold text-[#111]">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-[#6C5A4A]">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-3.5 w-3.5 text-[#E93354]/75" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-[#E93354]/75" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1 font-medium text-[#E93354]">
                          <Clock className="h-3.5 w-3.5" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Button 
                      onClick={() => handleApplyClick(job.title)}
                      className="rounded-full bg-[#E93354] hover:bg-[#c72944] text-white font-baloo px-6 py-2.5"
                    >
                      Apply Now
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm leading-relaxed text-[#5F4B3C] mb-4">{job.description}</p>
                    <h4 className="font-baloo font-bold text-[#111] text-sm mb-2 uppercase tracking-wide">Key Requirements:</h4>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#6C5A4A]">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Timeline */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-[#E93354] text-xs uppercase tracking-[0.35em] font-semibold">How It Works</p>
            <h2 className="font-lilita text-3xl font-extrabold text-[#111] md:text-5xl">Your Hiring Journey</h2>
            <p className="text-[#6C5A4A]">
              We respect your time and believe in a clear, collaborative hiring process.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#F0E5D8] hidden md:block -translate-y-8" />
            
            <div className="relative text-center space-y-4">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#E93354] text-white font-baloo text-xl font-bold shadow-md z-10 relative">
                1
              </div>
              <h3 className="font-baloo text-lg font-bold text-[#111]">Apply Online</h3>
              <p className="text-xs text-[#6C5A4A] max-w-xs mx-auto">
                Fill out the application form below or email your resume detailing your craft experience.
              </p>
            </div>

            <div className="relative text-center space-y-4">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#E93354] text-white font-baloo text-xl font-bold shadow-md z-10 relative">
                2
              </div>
              <h3 className="font-baloo text-lg font-bold text-[#111]">HR Review</h3>
              <p className="text-xs text-[#6C5A4A] max-w-xs mx-auto">
                Our HR specialists evaluate your experience and invite qualified candidates for a discovery call.
              </p>
            </div>

            <div className="relative text-center space-y-4">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#E93354] text-white font-baloo text-xl font-bold shadow-md z-10 relative">
                3
              </div>
              <h3 className="font-baloo text-lg font-bold text-[#111]">Skill Evaluation</h3>
              <p className="text-xs text-[#6C5A4A] max-w-xs mx-auto">
                Depending on the role, perform a kitchen test run or participate in a technical round.
              </p>
            </div>

            <div className="relative text-center space-y-4">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#E93354] text-white font-baloo text-xl font-bold shadow-md z-10 relative">
                4
              </div>
              <h3 className="font-baloo text-lg font-bold text-[#111]">Join the Team</h3>
              <p className="text-xs text-[#6C5A4A] max-w-xs mx-auto">
                Review your offer details, complete safety training, and start baking happiness with us!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section ref={formRef} className="py-20 bg-[#FFF4E6]/40 border-t border-[#F0E5D8]">
        <div className="mx-auto max-w-3xl px-6">
          <div className="rounded-3xl border border-[#F0E5D8] bg-white p-8 md:p-12 shadow-soft">
            <div className="text-center max-w-xl mx-auto mb-8 space-y-3">
              <h2 className="font-lilita text-3xl font-bold text-[#111]">Submit Your Application</h2>
              <p className="text-sm text-[#6C5A4A]">
                Ready to rise with us? Fill out the details below, and our recruitment team will get in touch.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-[#111]">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-[#E8D8C6] px-4 py-3 text-sm focus:border-[#E93354] focus:outline-none focus:ring-1 focus:ring-[#E93354]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-[#111]">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-[#E8D8C6] px-4 py-3 text-sm focus:border-[#E93354] focus:outline-none focus:ring-1 focus:ring-[#E93354]"
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-[#111]">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full rounded-2xl border border-[#E8D8C6] px-4 py-3 text-sm focus:border-[#E93354] focus:outline-none focus:ring-1 focus:ring-[#E93354]"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="position" className="text-sm font-semibold text-[#111]">Position of Interest</label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border border-[#E8D8C6] px-4 py-3 text-sm focus:border-[#E93354] focus:outline-none focus:ring-1 focus:ring-[#E93354] bg-white text-[#5F4B3C]"
                  >
                    <option value="" disabled>Select a position</option>
                    {jobsList.map((job) => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                    <option value="General Application">General Application / Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#111]">Resume / Portfolio</label>
                <div className="grid gap-6 sm:grid-cols-2">
                  {/* File Upload Zone */}
                  <div className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#E8D8C6] bg-[#FFFBF6] p-4 text-center transition-all duration-200 hover:border-[#E93354] hover:bg-[#E93354]/5">
                    <input
                      type="file"
                      id="resumeFile"
                      name="resumeFile"
                      accept=".pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        setResumeFile(file);
                      }}
                      className="absolute inset-0 cursor-pointer opacity-0 z-10"
                    />
                    <UploadCloud className="h-8 w-8 text-[#E93354] mb-2" />
                    {resumeFile ? (
                      <div className="px-2">
                        <p className="text-xs font-semibold text-[#E93354] truncate max-w-[220px]">
                          {resumeFile.name}
                        </p>
                        <p className="text-[10px] text-[#6C5A4A]/70">
                          {(resumeFile.size / 1024 / 1024).toFixed(2)} MB • Click to change
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-xs font-semibold text-[#111]">Upload PDF Resume</p>
                        <p className="text-[10px] text-[#6C5A4A]/60">Drag & drop or click</p>
                      </div>
                    )}
                  </div>

                  {/* Resume Link */}
                  <div className="flex flex-col justify-center space-y-2">
                    <label htmlFor="resumeLink" className="text-xs font-semibold text-[#6C5A4A]">Or Provide Resume Web Link</label>
                    <input
                      id="resumeLink"
                      name="resumeLink"
                      type="url"
                      value={formData.resumeLink}
                      onChange={handleInputChange}
                      placeholder="Google Drive, Dropbox, or LinkedIn URL"
                      className="w-full rounded-2xl border border-[#E8D8C6] px-4 py-3 text-sm focus:border-[#E93354] focus:outline-none focus:ring-1 focus:ring-[#E93354]"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-[#111]">Tell Us About Yourself & Your Passion</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share a brief introduction or write a cover letter..."
                  className="w-full rounded-2xl border border-[#E8D8C6] px-4 py-3 text-sm focus:border-[#E93354] focus:outline-none focus:ring-1 focus:ring-[#E93354] resize-none"
                />
              </div>

              <div className="pt-2 text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto rounded-full bg-[#E93354] hover:bg-[#c72944] text-white px-10 py-6 font-baloo text-base font-semibold shadow-md transition-transform duration-200 hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    "Submitting Application..."
                  ) : (
                    <>
                      Submit Application
                      <Send className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
