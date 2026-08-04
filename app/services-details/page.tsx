import {
  Layout,
  ServicesDetailsHero,
  SidebarTabs,
  ContactCard,
  ServiceContent
} from '../../components'

export default function ServicesDetails() {
  return (
    <Layout>
      <ServicesDetailsHero />
      
      {/* Main Content Area */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Sidebar */}
            <div className="lg:col-span-1">
              <SidebarTabs />
              <ContactCard />
            </div>
            
            {/* Right Column - Main Content */}
            <div className="lg:col-span-2">
              <ServiceContent />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
} 