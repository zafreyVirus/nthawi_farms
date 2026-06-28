/* ============================================================
   NTHAWI FARMS - Custom JS
   ============================================================ */

/* ===== PARTNERS CAROUSEL ===== */
(function () {
  var partners = [
    { 
      name: 'Ministry of Agriculture', 
      img: 'images/partners/minAgri.jpeg',
      alt: 'Ministry of Agriculture Malawi'
    },
    { 
      name: 'Cadecom Malawi',
      img: 'images/partners/cadecom.png',
      alt: 'Cadecom Malawi'
    },
    { 
      name: 'ETG',
      img: 'images/partners/ETG.avif',
      alt: 'ETG'
    },
    { 
      name: 'Chriss Trading',
      img: 'images/partners/Chriss-Trading-Logo.png',
      alt: 'Chriss Trading'
    },
    { 
      name: 'Fawwg Agrodealers',
      img: 'images/partners/partner5.png',
      alt: 'Fawwg Trading'
    },
  ];

  function card(p) {
    return '<div class="partner-card">' +
      '<div class="partner-logo-box">' +
      '<img src="' + p.img + '" alt="' + p.alt + '" class="partner-logo-img">' +
      '</div>' +
      '<span class="partner-name">' + p.name + '</span>' +
      '</div>';
  }

  var track = document.getElementById('partnersTrack');
  if (!track) return;
  // Render twice for seamless loop
  var html = '';
  var doubled = partners.concat(partners);
  for (var i = 0; i < doubled.length; i++) html += card(doubled[i]);
  track.innerHTML = html;
})();

/* ===== SERVICE MODAL ===== */
var serviceData = {
  irrigation: {
    title: 'Best Sustainable Irrigation Systems',
    img: 'images/pipe_irr.jpg',
    content: '<p>Nthawi Farms operates a comprehensive network of drip and sprinkler irrigation systems across our fields, ensuring consistent water delivery to all crops throughout the year — even during dry season.</p><p>Our systems are designed with sustainability at the core: we harvest rainwater, manage soil moisture digitally, and minimise water wastage. This approach has enabled us to achieve year-round vegetable production and predictable harvests.</p><p>We also provide irrigation system consultancy to smallholder farmers in our region, helping them adopt low-cost, efficient watering solutions tailored to their land.</p>'
  },
  agrotraining: {
    title: 'Agro-Training Programs',
    img: 'images/farm_visit.jpg',
    content: '<p>Our Agro-Training programme is designed for farmers, agribusiness entrepreneurs, and youth who want to build real, bankable skills in modern agriculture. We offer short courses, immersive farm attachments, and hands-on demonstrations.</p><p>Topics covered include soil health management, integrated pest management, post-harvest handling, business record-keeping for smallholder farmers, and climate-smart agriculture techniques.</p><p>Participants leave with practical knowledge, a certificate of completion, and access to our ongoing farmer support network.</p>'
  },
  supply: {
    title: 'Bulk Produce Supply',
    img: 'images/tomato_bag.jpg',
    content: '<p>Nthawi Farms supplies fresh produce in bulk to supermarkets, schools, hospitals, NGOs, processing companies, and export agents across Malawi and beyond.</p><p>We maintain high standards of quality at every step — from field to packaging — and can provide phytosanitary certificates for export-grade produce. Our capacity includes tomatoes, onions, beans, maize, rice, and a variety of leafy vegetables.</p><p>To place a bulk order or establish a supply agreement, please <a href="contact.html">contact us</a> to discuss your requirements.</p>'
  },
  farmupdates: {
    title: 'Farm Updates & Community Outreach',
    img: 'images/img/meeting.jpeg',
    content: '<p>We believe in transparency and community engagement. Our Farm Updates platform keeps stakeholders, customers, and community members informed about our seasonal progress, new crops, pricing, and upcoming events.</p><p>Beyond the farm, Nthawi Farms actively participates in community outreach — supporting local schools with nutritional gardens, sponsoring youth agricultural clubs, and contributing to village development initiatives.</p><p>Follow our <a href="https://web.facebook.com/p/Nthawi-farms-mw-100085672121837/" target="_blank">Facebook page</a> for the latest updates, or subscribe via the <a href="contact.html">contact page</a>.</p>'
  },
  organic: {
    title: 'Organic Farming Training',
    img: 'images/biochar.jpg',
    content: '<p>Nthawi Farms is a pioneer of organic farming practices in Malawi. Our organic training programme teaches participants how to produce food without synthetic chemicals — using compost, biochar, natural pest control, and crop rotation strategies.</p><p>The programme covers: compost making and biochar production, companion planting, natural pest and disease management, soil fertility improvement, and organic market access and certification basics.</p><p>These skills are especially valuable for farmers who want to tap into premium organic markets locally and internationally. Training is available both on-site and through our <a href="learning-center.html">Learning Center</a>.</p>'
  },
  community: {
    title: 'Community Farmer Training',
    img: 'images/img/meeting1.jpeg',
    content: '<p>Our Community Farmer Training programme takes agricultural knowledge directly to villages and farming clusters across the region. We work with local farmer groups, women\'s cooperatives, and youth groups to deliver practical, hands-on training in the field.</p><p>Sessions are conducted in Chichewa and English and cover land preparation, seed selection, planting techniques, input management, and harvesting and storage best practices.</p><p>To request a community training session in your area, reach out through our <a href="contact.html">contact page</a>. We partner with NGOs and government extension workers to scale impact.</p>'
  }
};

function openServiceModal(id) {
  var data = serviceData[id];
  if (!data) return;
  document.getElementById('serviceModalTitle').innerHTML = data.title;
  document.getElementById('serviceModalImg').src = data.img;
  document.getElementById('serviceModalImg').alt = data.title;
  document.getElementById('serviceModalContent').innerHTML = data.content;
  document.getElementById('serviceModalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
  document.getElementById('serviceModalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.getElementById('serviceModalOverlay');
  var closeBtn = document.getElementById('modalCloseBtn');
  if (overlay) overlay.addEventListener('click', function (e) { if (e.target === overlay) closeServiceModal(); });
  if (closeBtn) closeBtn.addEventListener('click', closeServiceModal);

  /* ===== GALLERY TABS ===== */
  var tabBtns = document.querySelectorAll('.gallery-tab-btn');
  var tabContents = document.querySelectorAll('.gallery-tab-content');
  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      tabBtns.forEach(function (b) { b.classList.remove('active'); });
      tabContents.forEach(function (c) { c.classList.remove('active'); });
      btn.classList.add('active');
      var target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add('active');
    });
  });

  /* ===== LEARNING CENTER FILTER ===== */
  var filterBtns = document.querySelectorAll('.lc-filter-btn');
  var courseCards = document.querySelectorAll('.course-card-wrap');
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.dataset.filter;
      courseCards.forEach(function (card) {
        if (filter === 'all' || card.dataset.type === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
