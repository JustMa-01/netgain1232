import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  service: z.string({
    required_error: "Please select a service.",
  }),
  budget: z.string().optional(),
  details: z.string().optional(),
});

// Define the services options
const serviceOptions = [
  "Website Development",
  "Web Application",
  "E-commerce Website",
  "UI/UX Design",
  "Digital Marketing",
  "SEO Optimization",
  "Maintenance & Support",
  "Other",
];

// Define the budget range options
const budgetOptions = [
  "₹5,000 - ₹15,000",
  "₹15,000 - ₹35,000",
  "₹35,000 - ₹75,000",
  "₹75,000+",
  "Not sure yet",
];

export function WhatsAppQuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      budget: "",
      details: "",
    },
  });

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Construct the WhatsApp message
    let message = `Hello Netgain,\nI would like to get a quote.\nName: ${values.name}\nEmail: ${values.email}\nService: ${values.service}`;
    
    // Add budget if provided
    if (values.budget && values.budget.trim() !== "") {
      message += `\nBudget Range: ${values.budget}`;
    }
    
    // Add project details if provided
    if (values.details && values.details.trim() !== "") {
      message += `\nProject Details: ${values.details}`;
    }
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/9347102347?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    // Reset form and submission state
    form.reset();
    setIsSubmitting(false);
  }

  return (
    <div className="glass-card border-white/10 p-8 rounded-xl animate-fade-in">
      <h2 className="text-3xl font-serif font-bold text-white mb-2">Get a Quote</h2>
      <p className="text-gray-400 mb-6">
        Fill out the form below and we'll get back to you with a custom quote via WhatsApp.
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Your name" 
                      {...field} 
                      className="glass-input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="your.email@example.com" 
                      type="email" 
                      {...field} 
                      className="glass-input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Service Needed</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="glass-input">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {serviceOptions.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Budget Range (Optional)</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="glass-input">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {budgetOptions.map((budget) => (
                        <SelectItem key={budget} value={budget}>
                          {budget}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription className="text-gray-500">
                    This helps us tailor our solution to your budget
                  </FormDescription>
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Project Details (Optional)</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us more about your project requirements..." 
                    className="glass-input min-h-[120px]" 
                    {...field} 
                  />
                </FormControl>
                <FormDescription className="text-gray-500">
                  The more details you provide, the more accurate our quote will be
                </FormDescription>
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="glow-button w-full md:w-auto" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Preparing WhatsApp..." : "Get Quote via WhatsApp"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </Form>
    </div>
  );
}