import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="max-w-4xl mx-auto bg-secondary rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-8">お問い合わせ</h1>
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;