
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlusCircle, Eye, FileText, Users, BarChart3 } from 'lucide-react';

const Admin = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Admin <span className="text-gradient">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-400">
            Manage your projects, testimonials, resources, and track leads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Projects Management */}
          <Card className="glass-card animate-slide-up">
            <CardHeader>
              <PlusCircle className="h-8 w-8 text-amber-400 mb-2" />
              <CardTitle className="text-white">Manage Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">Add, edit, and showcase your portfolio projects</p>
              <Button className="w-full glass-button">
                Manage Projects
              </Button>
            </CardContent>
          </Card>

          {/* Testimonials */}
          <Card className="glass-card animate-slide-up" style={{ animationDelay: '100ms' }}>
            <CardHeader>
              <Users className="h-8 w-8 text-amber-400 mb-2" />
              <CardTitle className="text-white">Testimonials</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">Add and manage client testimonials</p>
              <Button className="w-full glass-button">
                Manage Testimonials
              </Button>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card className="glass-card animate-slide-up" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <FileText className="h-8 w-8 text-amber-400 mb-2" />
              <CardTitle className="text-white">Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">Upload PDFs, tools, and downloadable content</p>
              <Button className="w-full glass-button">
                Manage Resources
              </Button>
            </CardContent>
          </Card>

          {/* Leads */}
          <Card className="glass-card animate-slide-up" style={{ animationDelay: '300ms' }}>
            <CardHeader>
              <Eye className="h-8 w-8 text-amber-400 mb-2" />
              <CardTitle className="text-white">View Leads</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">Review contact form and quote submissions</p>
              <Button className="w-full glass-button">
                View Leads
              </Button>
            </CardContent>
          </Card>

          {/* Analytics */}
          <Card className="glass-card animate-slide-up" style={{ animationDelay: '400ms' }}>
            <CardHeader>
              <BarChart3 className="h-8 w-8 text-amber-400 mb-2" />
              <CardTitle className="text-white">Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">Track website performance and lead sources</p>
              <Button className="w-full glass-button">
                View Analytics
              </Button>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="glass-card animate-slide-up" style={{ animationDelay: '500ms' }}>
            <CardHeader>
              <CardTitle className="text-white">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Projects</span>
                  <span className="text-white font-semibold">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">New Leads</span>
                  <span className="text-white font-semibold">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Resources</span>
                  <span className="text-white font-semibold">3</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center glass-card p-8">
          <h3 className="text-2xl font-serif font-bold text-white mb-4">
            Coming Soon: Full CMS
          </h3>
          <p className="text-gray-400">
            Advanced content management system with database integration will be available in the next update.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Admin;
