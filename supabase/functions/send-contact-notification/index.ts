import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactSubmission {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  price_range: string;
  how_found: string;
  contact_preference: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const submission: ContactSubmission = await req.json();
    
    console.log("Processing contact submission:", submission);

    // Send notification email
    const emailResponse = await resend.emails.send({
      from: "Collection 327 <onboarding@resend.dev>",
      to: ["taliarose327@gmail.com"],
      subject: `New Contact Form Submission from ${submission.first_name} ${submission.last_name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${submission.first_name} ${submission.last_name}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        ${submission.phone ? `<p><strong>Phone:</strong> ${submission.phone}</p>` : ''}
        <p><strong>Price Range Interest:</strong> ${submission.price_range}</p>
        <p><strong>How They Found You:</strong> ${submission.how_found}</p>
        <p><strong>Contact Preference:</strong> ${submission.contact_preference}</p>
        <p><strong>Message:</strong></p>
        <p>${submission.message}</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
