import enFaqs from './langs/en.json' assert { type: 'json' };
import esFaqs from './langs/bn.json' assert { type: 'json' };
import frFaqs from './langs/jp.json' assert { type: 'json' };

const DB = { en: enFaqs, bn: bnFaqs, jp: jpFaqs };

export function getDB(lang) {
  return DB[lang] || DB['en'];
}

{
  "faq_store": {
    "source": "https://techmirai-ai.com/",
    "business": "TechMirai AI",
    "last_fetched": "2026-06-09",
    "languages": ["en", "jp", "bn"],
    "faqs": [
      {
        "id": 1,
        "en": {
          "question": "What is an AI Agent and how is it different from a chatbot?",
          "answer": "An AI Agent is a fully autonomous digital employee that can answer questions, take actions, and complete real business tasks — not just reply to FAQs. Unlike a scripted chatbot, a TechMirai AI Agent uses Agentic RAG to read your business documents, then executes operations like booking reservations, updating CRMs, or routing orders, all without human intervention."
        },
        "jp": {
          "question": "AIエージェントとは何ですか？チャットボットとどう違うのですか？",
          "answer": "AIエージェントは、FAQに答えるだけでなく、質問への回答・具体的な行動・実際の業務タスクの完遂を自律的に行うデジタル社員です。スクリプト型チャットボットとは異なり、TechMirai AIエージェントはAgentic RAGを活用してお客様のビジネス文書を読み込み、予約受付・CRM更新・注文ルーティングなどの業務を人手を介さず実行します。"
        },
        "bn": {
          "question": "AI এজেন্ট কী এবং এটি চ্যাটবটের থেকে কীভাবে আলাদা?",
          "answer": "AI এজেন্ট হলো একটি সম্পূর্ণ স্বায়ত্তশাসিত ডিজিটাল কর্মী যা শুধু FAQ-এর উত্তর দেওয়ার বাইরে প্রশ্নের জবাব দেওয়া, পদক্ষেপ নেওয়া এবং বাস্তব ব্যবসায়িক কাজ সম্পন্ন করতে পারে। স্ক্রিপ্টেড চ্যাটবটের বিপরীতে, TechMirai AI এজেন্ট Agentic RAG ব্যবহার করে আপনার ব্যবসায়িক নথি পড়ে এবং মানুষের হস্তক্ষেপ ছাড়াই সংরক্ষণ বুকিং, CRM আপডেট বা অর্ডার রাউটিংয়ের মতো কাজ সম্পাদন করে।"
        }
      },
      {
        "id": 2,
        "en": {
          "question": "How much does a TechMirai AI Agent cost in Japan?",
          "answer": "Three pricing tiers built for the Japanese SME market: the Starter Agent at ¥4,900/month for single-location businesses, the Growth Partner at ¥19,800/month for multi-location and voice-enabled deployments, and a custom Enterprise plan for chains and franchises. One-time setup fees start at ¥49,800."
        },
        "jp": {
          "question": "日本でTechMirai AIエージェントを導入するといくらかかりますか？",
          "answer": "日本の中小企業向けに設計された3つの料金プランをご用意しています。単店舗向けのスターターエージェントが月額¥4,900、複数店舗や音声対応が必要な場合はグロースパートナーが月額¥19,800、チェーン店やフランチャイズ向けのエンタープライズプランはカスタム見積もりとなります。初期設定費用は¥49,800からとなります。"
        },
        "bn": {
          "question": "জাপানে TechMirai AI এজেন্টের খরচ কত?",
          "answer": "জাপানের ক্ষুদ্র ও মাঝারি ব্যবসার জন্য তিনটি মূল্য স্তর রয়েছে: একক-শাখার ব্যবসার জন্য স্টার্টার এজেন্ট মাসে ¥৪,৯০০, একাধিক শাখা ও ভয়েস-সক্ষম ডিপ্লয়মেন্টের জন্য গ্রোথ পার্টনার মাসে ¥১৯,৮০০, এবং চেইন ও ফ্র্যাঞ্চাইজির জন্য কাস্টম এন্টারপ্রাইজ প্ল্যান। একবারের সেটআপ ফি ¥৪৯,৮০০ থেকে শুরু।"
        }
      },
      {
        "id": 3,
        "en": {
          "question": "Does the AI support Japanese and English?",
          "answer": "Yes — multilingual support is built in by default. Our agents speak natural Japanese (including proper 敬語 / keigo) and fluent English, making them ideal for restaurants serving inbound tourists, eCommerce brands selling globally, and clinics treating international and South Asian patients."
        },
        "jp": {
          "question": "AIは日本語と英語に対応していますか？",
          "answer": "はい、多言語対応は標準搭載されています。当社のエージェントは自然な日本語（適切な敬語を含む）と流暢な英語で対応可能です。インバウンド観光客を受け入れる飲食店、グローバルに販売するECブランド、外国人・南アジア系患者を診察するクリニックに最適です。"
        },
        "bn": {
          "question": "AI কি জাপানি এবং ইংরেজি ভাষা সমর্থন করে?",
          "answer": "হ্যাঁ — বহুভাষিক সমর্থন ডিফল্টভাবে অন্তর্নির্মিত। আমাদের এজেন্ট স্বাভাবিক জাপানি (যথাযথ 敬語 / কেইগো সহ) এবং প্রবাহিত ইংরেজিতে কথা বলে, যা আন্তর্জাতিক পর্যটকদের সেবা দেওয়া রেস্তোরাঁ, বৈশ্বিকভাবে বিক্রিত ই-কমার্স ব্র্যান্ড এবং আন্তর্জাতিক ও দক্ষিণ এশীয় রোগীদের চিকিৎসা করা ক্লিনিকের জন্য আদর্শ।"
        }
      },
      {
        "id": 4,
        "en": {
          "question": "Can a Voice AI Agent really replace my receptionist or front desk?",
          "answer": "A TechMirai Voice Agent handles roughly 80% of inbound calls — bookings, FAQs, hours, directions, order status — fully autonomously, 24/7. The remaining 20% (complex complaints, VIP customers, edge cases) is intelligently routed to your human staff with a full transcript and context summary already prepared, so your team works smarter, not harder."
        },
        "jp": {
          "question": "音声AIエージェントは本当に受付スタッフの代わりになりますか？",
          "answer": "TechMiraiの音声エージェントは、予約・よくある質問・営業時間・道案内・注文状況など、インバウンドコールの約80%を24時間365日、完全自律で対応します。残りの20%（複雑なクレーム・VIP顧客・イレギュラー対応）は、会話のトランスクリプトとコンテキストの要約が事前に用意された状態で人間のスタッフに自動転送されるため、チームはより賢く、効率的に働けます。"
        },
        "bn": {
          "question": "ভয়েস AI এজেন্ট কি সত্যিই আমার রিসেপশনিস্ট বা ফ্রন্ট ডেস্ক প্রতিস্থাপন করতে পারে?",
          "answer": "TechMirai ভয়েস এজেন্ট ইনবাউন্ড কলের প্রায় ৮০% — বুকিং, FAQ, সময়সূচি, দিকনির্দেশনা, অর্ডার স্ট্যাটাস — ২৪/৭ সম্পূর্ণ স্বায়ত্তশাসিতভাবে পরিচালনা করে। বাকি ২০% (জটিল অভিযোগ, ভিআইপি গ্রাহক, বিশেষ ক্ষেত্র) সম্পূর্ণ ট্রান্সক্রিপ্ট ও প্রেক্ষাপট সারসংক্ষেপসহ আপনার মানব কর্মীদের কাছে বুদ্ধিমত্তার সাথে রুট করা হয়।"
        }
      },
      {
        "id": 5,
        "en": {
          "question": "How long does it take to launch a TechMirai AI system?",
          "answer": "Most Starter Agent deployments go live in 2–3 weeks; Growth Partner systems with voice and CRM integration typically launch in 3–4 weeks. We follow a structured engineering pipeline: discovery audit (week 1), build and integration (weeks 2–3), supervised live testing (week 4), then full launch."
        },
        "jp": {
          "question": "TechMiraiのAIシステムの導入にはどのくらいの期間がかかりますか？",
          "answer": "スターターエージェントの多くは2〜3週間で稼働開始できます。音声対応とCRM連携を含むグロースパートナーシステムは通常3〜4週間です。構造化されたエンジニアリングプロセスに沿って進め、ディスカバリー監査（第1週）、構築・統合（第2〜3週）、監視下での本番テスト（第4週）を経て、フルローンチとなります。"
        },
        "bn": {
          "question": "TechMirai AI সিস্টেম চালু করতে কতদিন সময় লাগে?",
          "answer": "বেশিরভাগ স্টার্টার এজেন্ট ডিপ্লয়মেন্ট ২–৩ সপ্তাহে লাইভ হয়; ভয়েস ও CRM ইন্টিগ্রেশনসহ গ্রোথ পার্টনার সিস্টেম সাধারণত ৩–৪ সপ্তাহে চালু হয়। আমরা একটি কাঠামোবদ্ধ ইঞ্জিনিয়ারিং পাইপলাইন অনুসরণ করি: ডিসকভারি অডিট (সপ্তাহ ১), বিল্ড ও ইন্টিগ্রেশন (সপ্তাহ ২–৩), তত্ত্বাবধানযুক্ত লাইভ টেস্টিং (সপ্তাহ ৪), তারপর সম্পূর্ণ লঞ্চ।"
        }
      },
      {
        "id": 6,
        "en": {
          "question": "What industries does TechMirai AI specialize in?",
          "answer": "We focus on three sectors where 24/7 AI automation has the fastest, most measurable ROI: restaurants (reservations and order-taking), eCommerce (sales concierge and cart recovery), and medical clinics (patient scheduling and FAQ deflection). We also build custom automation for warehouses and physical retail using smart camera systems."
        },
        "jp": {
          "question": "TechMirai AIはどの業界を専門としていますか？",
          "answer": "24時間365日のAI自動化によって最も速く、最も測定可能なROIが期待できる3つの分野に注力しています。飲食業（予約受付・注文取り）、eコマース（販売サポート・カゴ落ち対策）、医療クリニック（患者スケジューリング・FAQ対応）です。スマートカメラシステムを用いた倉庫・実店舗向けのカスタム自動化も対応しています。"
        },
        "bn": {
          "question": "TechMirai AI কোন শিল্পে বিশেষজ্ঞ?",
          "answer": "আমরা তিনটি খাতে মনোযোগ দিই যেখানে ২৪/৭ AI অটোমেশন সবচেয়ে দ্রুত ও পরিমাপযোগ্য ROI দেয়: রেস্তোরাঁ (সংরক্ষণ ও অর্ডার গ্রহণ), ই-কমার্স (সেলস কনসিয়ার্জ ও কার্ট রিকভারি), এবং মেডিকেল ক্লিনিক (রোগী শিডিউলিং ও FAQ ডিফ্লেকশন)। আমরা স্মার্ট ক্যামেরা সিস্টেম ব্যবহার করে গুদাম ও ফিজিক্যাল রিটেইলের জন্যও কাস্টম অটোমেশন তৈরি করি।"
        }
      },
      {
        "id": 7,
        "en": {
          "question": "Where is TechMirai AI located, and do you serve clients outside Saitama?",
          "answer": "TechMirai AI is headquartered in Wako-shi, Saitama — the same city as Honda Research Institute Japan — with a senior engineering team based in Bangladesh. We serve clients across the entire Greater Tokyo region (Tokyo, Saitama, Kanagawa, Chiba) and remotely throughout Japan. In-person consultations are standard for clients within a 90-minute travel radius of Wako."
        },
        "jp": {
          "question": "TechMirai AIの所在地はどこですか？埼玉県外のクライアントにも対応していますか？",
          "answer": "TechMirai AIは、本田技術研究所（HRI-JP）と同じ埼玉県和光市に本社を置き、シニアエンジニアリングチームはバングラデシュを拠点としています。首都圏全域（東京・埼玉・神奈川・千葉）のクライアントへの対応に加え、日本全国にリモートでサービスを提供しています。和光市から90分以内のクライアントには対面でのコンサルティングも対応しています。"
        },
        "bn": {
          "question": "TechMirai AI কোথায় অবস্থিত এবং আপনারা কি সাইতামার বাইরের ক্লায়েন্টদেরও সেবা দেন?",
          "answer": "TechMirai AI-এর সদর দপ্তর সাইতামার ওয়াকো-শিতে — হোন্ডা রিসার্চ ইনস্টিটিউট জাপানের একই শহরে — এবং সিনিয়র ইঞ্জিনিয়ারিং টিম বাংলাদেশে অবস্থিত। আমরা গ্রেটার টোকিও অঞ্চল (টোকিও, সাইতামা, কানাগাওয়া, চিবা) জুড়ে এবং সারা জাপানে রিমোটলি ক্লায়েন্টদের সেবা দিই। ওয়াকো থেকে ৯০ মিনিটের ভ্রমণ দূরত্বের মধ্যে ক্লায়েন্টদের জন্য সরাসরি পরামর্শ সেশন প্রদান করা হয়।"
        }
      },
      {
        "id": 8,
        "en": {
          "question": "Is my business data safe with TechMirai AI?",
          "answer": "Yes. Every system we deploy is a custom-coded application that lives on your infrastructure or a dedicated private cloud instance — not a shared SaaS database. Your customer data, business documents, and conversation logs are isolated, encrypted at rest, and never used to train third-party models."
        },
        "jp": {
          "question": "TechMirai AIに預けたビジネスデータは安全ですか？",
          "answer": "はい。導入するすべてのシステムは、共有SaaSデータベースではなく、お客様のインフラまたは専用プライベートクラウド上で動作するカスタムコードのアプリケーションです。顧客データ・ビジネス文書・会話ログは完全に分離・暗号化（保存時）されており、サードパーティのモデル学習に使用されることは一切ありません。"
        },
        "bn": {
          "question": "TechMirai AI-এর সাথে আমার ব্যবসায়িক ডেটা কি নিরাপদ?",
          "answer": "হ্যাঁ। আমরা যে প্রতিটি সিস্টেম ডিপ্লয় করি তা একটি কাস্টম-কোডেড অ্যাপ্লিকেশন যা আপনার অবকাঠামো বা একটি ডেডিকেটেড প্রাইভেট ক্লাউড ইনস্ট্যান্সে থাকে — শেয়ার্ড SaaS ডেটাবেসে নয়। আপনার গ্রাহক ডেটা, ব্যবসায়িক নথি এবং কথোপকথনের লগ আলাদা রাখা হয়, বিশ্রামে এনক্রিপ্ট করা হয় এবং কখনও তৃতীয় পক্ষের মডেল প্রশিক্ষণে ব্যবহার করা হয় না।"
        }
      },
      {
        "id": 9,
        "en": {
          "question": "How do I get started?",
          "answer": "Book a free 30-minute Strategy Audit. We'll review your current customer-flow bottlenecks, identify where AI automation will deliver the highest ROI, and recommend the right plan. No obligation — you'll leave the call with a concrete action plan whether you hire us or not."
        },
        "jp": {
          "question": "どうすれば始められますか？",
          "answer": "無料の30分ストラテジー監査をご予約ください。現在の顧客フローのボトルネックを確認し、AI自動化で最も高いROIが見込める箇所を特定し、最適なプランをご提案します。契約の義務は一切ありません。ご依頼いただかない場合でも、具体的なアクションプランを持ってお電話を終えていただけます。"
        },
        "bn": {
          "question": "আমি কিভাবে শুরু করব?",
          "answer": "একটি বিনামূল্যে ৩০ মিনিটের স্ট্র্যাটেজি অডিট বুক করুন। আমরা আপনার বর্তমান গ্রাহক-প্রবাহের বাধাগুলো পর্যালোচনা করব, AI অটোমেশন কোথায় সর্বোচ্চ ROI দেবে তা চিহ্নিত করব এবং সঠিক পরিকল্পনা সুপারিশ করব। কোনো বাধ্যবাধকতা নেই — আপনি আমাদের নিয়োগ করুন বা না করুন, কলের শেষে একটি সুনির্দিষ্ট অ্যাকশন প্ল্যান নিয়ে যাবেন।"
        }
      }
    ]
  }
}