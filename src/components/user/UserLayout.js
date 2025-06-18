import React from 'react';
import { UserHeader } from './UserHeader';
import { UserFooter } from './UserFooter';

const UserLayout = ({ children }) => {
  return (
    <div class="main-wrapper">

      <div class="top-header">
        Find the Best Instant Talents Platform
        <span class="close-btn"
          onclick="if (!window.__cfRLUnblockHandlers) return false; this.parentElement.style.display='none'"
          data-cf-modified-befc89958e432fcd140d906a-=""><i class="ti ti-xbox-x"></i></span>
      </div>
      {/* Example layout structure */}
      <UserHeader />
      <main>{children}</main>
      <UserFooter />


      <div class="mouse-cursor cursor-outer"></div>
      <div class="mouse-cursor cursor-inner"></div>



      <div class="back-to-top">
        <a class="back-to-top-icon align-items-center justify-content-center d-flex" href="#top">
          <i class="ti ti-arrow-badge-up" aria-hidden="true"></i>
        </a>
      </div>

    </div>
  );
};

export default UserLayout; 