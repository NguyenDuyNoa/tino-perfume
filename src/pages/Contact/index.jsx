import React from "react";
import PageLayout from "../../components/Layout/PageLayout";

const Contact = () => {
  return (
    <PageLayout>
      <section className="bg-white py-8">
        <div className="container py-8 px-6 mx-auto">
          <a
            className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8"
            href="/"
          >
            Về chúng tôi
          </a>
          <p className="mt-8 mb-8">
            Tino Perfume - Nơi mùi hương là bạn đồng hành
          </p>
          <p className="mb-8">
            Nếu bạn đang tìm một shop nước hoa Tino Perfume uy tín thì đừng ngần
            ngại liên hệ Tino Perfume nhé. Mình là Tino và đang là nhà phân phối
            của hệ thống Tino Perfume tại Việt Nam. Mọi sản phẩm được cung cấp
            trên website này sẽ được đảm bảo chính hãng 100%, thông tin sản phẩm
            và khuyến mãi sẽ được cập nhật liên tục . Tino luôn định hướng phát
            triển lâu dài với Charme nên sẽ lấy uy tín làm kim chỉ nam để phục
            vụ khách hàng, cảm ơn các anh chị em đã tin tưởng và ủng hộ.
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
