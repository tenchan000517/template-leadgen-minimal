'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getPageData } from '@/lib/site';
import { PageHeader, PrimaryButton, TextLink } from '@/components';
import FormField from '@/components/contact/FormField';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  privacy?: string;
}

export default function ContactPage() {
  const data = getPageData('contact');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    if (!phone) return true;
    const re = /^[\d-+()]+$/;
    return re.test(phone);
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'メールアドレスの形式が正しくありません';
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = '電話番号の形式が正しくありません';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'ご相談内容を入力してください';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'ご相談内容は10文字以上で入力してください';
    }

    if (!privacyAgreed) {
      newErrors.privacy = 'プライバシーポリシーへの同意が必要です';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        // サーバーサイドバリデーションエラーを処理
        if (result.errors) {
          const serverErrors: FormErrors = {};
          result.errors.forEach((err: { field: string; message: string }) => {
            serverErrors[err.field as keyof FormErrors] = err.message;
          });
          setErrors(serverErrors);
        } else {
          setErrors({ message: result.message || '送信に失敗しました' });
        }
        return;
      }

      setIsSubmitted(true);
    } catch {
      setErrors({ message: '通信エラーが発生しました。しばらく経ってから再度お試しください。' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFieldChange = (field: keyof FormData) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-[60vh] flex flex-col justify-center items-center px-[5%] lg:px-[20%] py-[120px] lg:py-[200px]"
      >
        <h1 className="text-[28px] lg:text-[36px] text-center">
          {data.thankYou.heading}
        </h1>
        <p className="text-text-light text-center mt-6 leading-[1.8] whitespace-pre-line">
          {data.thankYou.description}
        </p>
        <div className="mt-12">
          <TextLink href={data.thankYou.backLink.href} arrow="left">
            {data.thankYou.backLink.text}
          </TextLink>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      {/* Page Header */}
      <PageHeader
        title={data.header.title}
        description={data.header.description}
        height="sm"
      />

      {/* Form Section */}
      <section className="bg-background-alt py-[60px] lg:py-[80px] px-[5%]">
        <form
          onSubmit={handleSubmit}
          className="max-w-[600px] mx-auto"
          noValidate
        >
          <div className="space-y-[28px] lg:space-y-[32px]">
            {data.form.fields.map((field) => (
              <FormField
                key={field.name}
                name={field.name}
                label={field.label}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                value={formData[field.name as keyof FormData]}
                onChange={handleFieldChange(field.name as keyof FormData)}
                error={errors[field.name as keyof FormErrors]}
              />
            ))}
          </div>

          {/* Privacy Policy Checkbox */}
          <div className="mt-[48px]">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={privacyAgreed}
                onChange={(e) => {
                  setPrivacyAgreed(e.target.checked);
                  if (errors.privacy) {
                    setErrors((prev) => ({ ...prev, privacy: undefined }));
                  }
                }}
                className="w-5 h-5 mt-0.5 accent-accent"
              />
              <span className="text-[14px] lg:text-[15px]">
                <Link
                  href={data.form.privacyPolicyLink}
                  target="_blank"
                  className="underline hover:opacity-80"
                >
                  プライバシーポリシー
                </Link>
                に同意する
              </span>
            </label>
            {errors.privacy && (
              <p className="text-[14px] text-[#dc2626] mt-2">{errors.privacy}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <PrimaryButton
              type="submit"
              size="lg"
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? '送信中...' : data.form.submitButtonText}
            </PrimaryButton>
          </div>

          {/* Note */}
          {data.form.note && (
            <p className="text-[14px] text-text-light text-center mt-6">
              {data.form.note}
            </p>
          )}
        </form>
      </section>
    </>
  );
}
