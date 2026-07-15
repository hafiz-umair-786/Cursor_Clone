document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-menu');
  const overlay = document.getElementById('mobile-menu-overlay');
  const closeBtn = document.getElementById('mobile-menu-close');
  const backBtn = document.getElementById('mobile-menu-back');

  const panelMain = document.getElementById('mobile-panel-main');
  const panelProduct = document.getElementById('mobile-panel-product');
  const panelResources = document.getElementById('mobile-panel-resources');

  let currentPanel = 'main';

  // Open overlay when hamburger is clicked
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      overlay.classList.add('active');
      showPanel('main');
    });
  }

  // Close overlay when close button is clicked
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  }

  // Go back to main panel when back button is clicked
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      showPanel('main');
    });
  }

  // Transition helper between panels
  function showPanel(panelName) {
    // Hide all panels
    panelMain.classList.remove('active');
    panelProduct.classList.remove('active');
    panelResources.classList.remove('active');

    if (panelName === 'main') {
      panelMain.classList.add('active');
      backBtn.classList.remove('visible');
      currentPanel = 'main';
    } else if (panelName === 'product') {
      panelProduct.classList.add('active');
      backBtn.classList.add('visible');
      currentPanel = 'product';
    } else if (panelName === 'resources') {
      panelResources.classList.add('active');
      backBtn.classList.add('visible');
      currentPanel = 'resources';
    }
  }

  // Handle click on links with submenus (Product, Resources)
  const submenuLinks = document.querySelectorAll('.mobile-menu-item.has-submenu');
  submenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSubmenu = link.getAttribute('data-submenu');
      showPanel(targetSubmenu);
    });
  });

  // Auto-close menu overlay when any other leaf link is clicked
  const allLinks = document.querySelectorAll('.mobile-menu-overlay a');
  allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if (!link.classList.contains('has-submenu')) {
        // Delay close slightly so user sees the tap feedback
        setTimeout(() => {
          overlay.classList.remove('active');
        }, 150);
      }
    });
  });
});
