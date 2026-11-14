"use client";

import { highlightedTestimonial, testimonials } from "@/app/data/testimonials";
import Image from "next/image";
import styled from "styled-components";
import { BaseLayout } from "@/app/components/BaseLayout";
import { PageHeader } from "@/app/components/PageHeader";
import { TestimonialCard } from "@/app/components/TestimonialCard";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Testimonials() {
  const pageData = {
    heading: "Testimonials",
    description:
      "Read what others have to say about experiences and collaborations",
  };

  return (
    <BaseLayout>
      <PageHeader pageData={pageData} />
      <TestimonialsWrapper>
        <Testimonial data-aos="zoom-in-up">
          <Message>❝{highlightedTestimonial.message}❞</Message>
          <PicNameWrapper>
            <Image
              className="rounded-3"
              src={highlightedTestimonial.image}
              alt={highlightedTestimonial.name}
              width={50}
              height={50}
            />
            <div>
              <Name>{highlightedTestimonial.name}</Name>
              <Desc>{highlightedTestimonial.role}</Desc>
            </div>
          </PicNameWrapper>
        </Testimonial>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 900: 2 }}>
          <Masonry gutter="16px">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </TestimonialsWrapper>
    </BaseLayout>
  );
}

const TestimonialsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 50px 0;
  transition: all 0.5s ease-in-out;
`;

const Testimonial = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.surfaceTranslucent};
  transition: all 0.5s ease-in-out;
`;

const Message = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-style: italic;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: all 0.5s ease-in-out;
`;

const PicNameWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px !important;
  transition: all 0.5s ease-in-out;
`;

const Name = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: all 0.5s ease-in-out;
`;

const Desc = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.5s ease-in-out;
`;
