import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary py-12 px-4">
      <div className="max-w-4xl mx-auto bg-secondary rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-4">お問い合わせ</h1>
        <div className="text-sm text-gray-600 mb-8 max-w-[35rem] mx-auto leading-relaxed">
          <p className="mb-4">
            PTA会員向けサイトに関するご意見・ご要望・ご質問等をお送りいただく際は、以下のお問い合わせフォームをご利用ください。
            お問い合わせ内容につきましては、できるだけ具体的な記述をお願い申し上げます。
          </p>
          <p>
            なお、原則として２〜3営業日以内の返信を心がけておりますが、お問い合わせに順次対応させていただいておりますので、返信がお手元に届くまで日数を頂戴する場合がございます。 
            悪しからずご了承くださいますよう、何卒お願い申し上げます。
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;