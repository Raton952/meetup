import React from 'react';
import user1 from '../../assets/images/user1.jpg';
import user2 from '../../assets/images/user2.jpg';
import user3 from '../../assets/images/user3.jpg';
import user4 from '../../assets/images/user4.jpg';

function JoinMeeting() {
  return (
    <div className='flex h-screen w-full'>

      <div className="flex-grow grid grid-cols-4 gap-4 py-10 px-20 bg-[#101826]">
        <div className="rounded-lg overflow-hidden w-auto h-fit relative">
          <img src={user1} className="w-full" alt="" />
          <span className='block bg-slate-600/70 text-white rounded py-1 px-3 absolute bottom-0 left-0'>Natura</span>
          <button type='button' className='h-8 w-8 rounded bg-slate-600/70 flex items-center justify-center absolute bottom-0 right-0'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C13.0609 15 14.0783 14.5786 14.8284 13.8284C15.5786 13.0783 16 12.0609 16 11V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V11C8 12.0609 8.42143 13.0783 9.17157 13.8284C9.92172 14.5786 10.9391 15 12 15Z" fill="white"/>
            <path d="M19 11C19 10.7348 18.8946 10.4804 18.7071 10.2929C18.5196 10.1054 18.2652 10 18 10C17.7348 10 17.4804 10.1054 17.2929 10.2929C17.1054 10.4804 17 10.7348 17 11C17 12.3261 16.4732 13.5979 15.5355 14.5355C14.5979 15.4732 13.3261 16 12 16C10.6739 16 9.40215 15.4732 8.46447 14.5355C7.52678 13.5979 7 12.3261 7 11C7 10.7348 6.89464 10.4804 6.70711 10.2929C6.51957 10.1054 6.26522 10 6 10C5.73478 10 5.48043 10.1054 5.29289 10.2929C5.10536 10.4804 5 10.7348 5 11C5.00197 12.6818 5.60941 14.3068 6.71118 15.5775C7.81295 16.8482 9.3354 17.6797 11 17.92V20H8.89C8.65396 20 8.42758 20.0938 8.26068 20.2607C8.09377 20.4276 8 20.654 8 20.89V21.11C8 21.346 8.09377 21.5724 8.26068 21.7393C8.42758 21.9062 8.65396 22 8.89 22H15.11C15.346 22 15.5724 21.9062 15.7393 21.7393C15.9062 21.5724 16 21.346 16 21.11V20.89C16 20.654 15.9062 20.4276 15.7393 20.2607C15.5724 20.0938 15.346 20 15.11 20H13V17.92C14.6646 17.6797 16.187 16.8482 17.2888 15.5775C18.3906 14.3068 18.998 12.6818 19 11Z" fill="white"/>
          </svg>
          </button>
        </div>
        <div className="rounded-lg overflow-hidden w-auto h-fit relative">
          <img src={user2} className="w-full" alt="" />
          <span className='block bg-slate-600/70 text-white rounded py-1 px-3 absolute bottom-0 left-0'>Cecile</span>
          <button type='button' className='h-8 w-8 rounded bg-slate-600/70 flex items-center justify-center absolute bottom-0 right-0'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.58 12.7501C15.8511 12.2062 15.9947 11.6077 16 11.0001V6.00005C15.9889 5.01225 15.6128 4.06348 14.9439 3.3365C14.275 2.60951 13.3608 2.15575 12.3773 2.06262C11.3939 1.96949 10.4107 2.24358 9.61731 2.83208C8.82387 3.42059 8.27628 4.28188 8.08 5.25005M19 11.0001C19 10.7348 18.8946 10.4805 18.7071 10.2929C18.5196 10.1054 18.2652 10.0001 18 10.0001C17.7348 10.0001 17.4804 10.1054 17.2929 10.2929C17.1054 10.4805 17 10.7348 17 11.0001C16.9971 11.8737 16.7587 12.7304 16.31 13.4801L17.78 15.0001C18.5847 13.8222 19.0104 12.4266 19 11.0001V11.0001ZM12 15.0001H12.16L8 10.8301V11.0001C8 12.0609 8.42143 13.0783 9.17157 13.8285C9.92172 14.5786 10.9391 15.0001 12 15.0001ZM20.71 19.2901L4.71 3.29005C4.61676 3.19681 4.50607 3.12285 4.38425 3.07239C4.26243 3.02193 4.13186 2.99596 4 2.99596C3.86814 2.99596 3.73757 3.02193 3.61575 3.07239C3.49393 3.12285 3.38324 3.19681 3.29 3.29005C3.10169 3.47836 2.99591 3.73375 2.99591 4.00005C2.99591 4.26635 3.10169 4.52175 3.29 4.71005L19.29 20.7101C19.383 20.8038 19.4936 20.8782 19.6154 20.9289C19.7373 20.9797 19.868 21.0058 20 21.0058C20.132 21.0058 20.2627 20.9797 20.3846 20.9289C20.5064 20.8782 20.617 20.8038 20.71 20.7101C20.8037 20.6171 20.8781 20.5065 20.9289 20.3846C20.9797 20.2628 21.0058 20.1321 21.0058 20.0001C21.0058 19.868 20.9797 19.7373 20.9289 19.6155C20.8781 19.4936 20.8037 19.383 20.71 19.2901V19.2901Z" fill="white"/>
            <path d="M15 20H13V17.92C13.5659 17.8412 14.12 17.6935 14.65 17.48L13.05 15.88C12.7058 15.9605 12.3535 16.0007 12 16C10.6739 16 9.40215 15.4732 8.46447 14.5355C7.52678 13.5979 7 12.3261 7 11C7 10.7348 6.89464 10.4804 6.70711 10.2929C6.51957 10.1054 6.26522 10 6 10C5.73478 10 5.48043 10.1054 5.29289 10.2929C5.10536 10.4804 5 10.7348 5 11C5.00197 12.6818 5.60941 14.3068 6.71118 15.5775C7.81295 16.8482 9.3354 17.6797 11 17.92V20H9C8.73478 20 8.48043 20.1054 8.29289 20.2929C8.10536 20.4804 8 20.7348 8 21C8 21.2652 8.10536 21.5196 8.29289 21.7071C8.48043 21.8946 8.73478 22 9 22H15C15.2652 22 15.5196 21.8946 15.7071 21.7071C15.8946 21.5196 16 21.2652 16 21C16 20.7348 15.8946 20.4804 15.7071 20.2929C15.5196 20.1054 15.2652 20 15 20Z" fill="white"/>
          </svg>
          </button>
        </div>
        <div className="rounded-lg overflow-hidden w-auto h-fit relative">
          <img src={user3} className="w-full" alt="" />
          <span className='block bg-slate-600/70 text-white rounded py-1 px-3 absolute bottom-0 left-0'>Nico</span>
          <button type='button' className='h-8 w-8 rounded bg-slate-600/70 flex items-center justify-center absolute bottom-0 right-0'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C13.0609 15 14.0783 14.5786 14.8284 13.8284C15.5786 13.0783 16 12.0609 16 11V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V11C8 12.0609 8.42143 13.0783 9.17157 13.8284C9.92172 14.5786 10.9391 15 12 15Z" fill="white"/>
            <path d="M19 11C19 10.7348 18.8946 10.4804 18.7071 10.2929C18.5196 10.1054 18.2652 10 18 10C17.7348 10 17.4804 10.1054 17.2929 10.2929C17.1054 10.4804 17 10.7348 17 11C17 12.3261 16.4732 13.5979 15.5355 14.5355C14.5979 15.4732 13.3261 16 12 16C10.6739 16 9.40215 15.4732 8.46447 14.5355C7.52678 13.5979 7 12.3261 7 11C7 10.7348 6.89464 10.4804 6.70711 10.2929C6.51957 10.1054 6.26522 10 6 10C5.73478 10 5.48043 10.1054 5.29289 10.2929C5.10536 10.4804 5 10.7348 5 11C5.00197 12.6818 5.60941 14.3068 6.71118 15.5775C7.81295 16.8482 9.3354 17.6797 11 17.92V20H8.89C8.65396 20 8.42758 20.0938 8.26068 20.2607C8.09377 20.4276 8 20.654 8 20.89V21.11C8 21.346 8.09377 21.5724 8.26068 21.7393C8.42758 21.9062 8.65396 22 8.89 22H15.11C15.346 22 15.5724 21.9062 15.7393 21.7393C15.9062 21.5724 16 21.346 16 21.11V20.89C16 20.654 15.9062 20.4276 15.7393 20.2607C15.5724 20.0938 15.346 20 15.11 20H13V17.92C14.6646 17.6797 16.187 16.8482 17.2888 15.5775C18.3906 14.3068 18.998 12.6818 19 11Z" fill="white"/>
          </svg>
          </button>
        </div>
        <div className="rounded-lg overflow-hidden w-auto h-fit relative">
          <img src={user4} className="w-full" alt="" />
          <span className='block bg-slate-600/70 text-white rounded py-1 px-3 absolute bottom-0 left-0'>Bryan</span>
          <button type='button' className='h-8 w-8 rounded bg-slate-600/70 flex items-center justify-center absolute bottom-0 right-0'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.58 12.7501C15.8511 12.2062 15.9947 11.6077 16 11.0001V6.00005C15.9889 5.01225 15.6128 4.06348 14.9439 3.3365C14.275 2.60951 13.3608 2.15575 12.3773 2.06262C11.3939 1.96949 10.4107 2.24358 9.61731 2.83208C8.82387 3.42059 8.27628 4.28188 8.08 5.25005M19 11.0001C19 10.7348 18.8946 10.4805 18.7071 10.2929C18.5196 10.1054 18.2652 10.0001 18 10.0001C17.7348 10.0001 17.4804 10.1054 17.2929 10.2929C17.1054 10.4805 17 10.7348 17 11.0001C16.9971 11.8737 16.7587 12.7304 16.31 13.4801L17.78 15.0001C18.5847 13.8222 19.0104 12.4266 19 11.0001V11.0001ZM12 15.0001H12.16L8 10.8301V11.0001C8 12.0609 8.42143 13.0783 9.17157 13.8285C9.92172 14.5786 10.9391 15.0001 12 15.0001ZM20.71 19.2901L4.71 3.29005C4.61676 3.19681 4.50607 3.12285 4.38425 3.07239C4.26243 3.02193 4.13186 2.99596 4 2.99596C3.86814 2.99596 3.73757 3.02193 3.61575 3.07239C3.49393 3.12285 3.38324 3.19681 3.29 3.29005C3.10169 3.47836 2.99591 3.73375 2.99591 4.00005C2.99591 4.26635 3.10169 4.52175 3.29 4.71005L19.29 20.7101C19.383 20.8038 19.4936 20.8782 19.6154 20.9289C19.7373 20.9797 19.868 21.0058 20 21.0058C20.132 21.0058 20.2627 20.9797 20.3846 20.9289C20.5064 20.8782 20.617 20.8038 20.71 20.7101C20.8037 20.6171 20.8781 20.5065 20.9289 20.3846C20.9797 20.2628 21.0058 20.1321 21.0058 20.0001C21.0058 19.868 20.9797 19.7373 20.9289 19.6155C20.8781 19.4936 20.8037 19.383 20.71 19.2901V19.2901Z" fill="white"/>
            <path d="M15 20H13V17.92C13.5659 17.8412 14.12 17.6935 14.65 17.48L13.05 15.88C12.7058 15.9605 12.3535 16.0007 12 16C10.6739 16 9.40215 15.4732 8.46447 14.5355C7.52678 13.5979 7 12.3261 7 11C7 10.7348 6.89464 10.4804 6.70711 10.2929C6.51957 10.1054 6.26522 10 6 10C5.73478 10 5.48043 10.1054 5.29289 10.2929C5.10536 10.4804 5 10.7348 5 11C5.00197 12.6818 5.60941 14.3068 6.71118 15.5775C7.81295 16.8482 9.3354 17.6797 11 17.92V20H9C8.73478 20 8.48043 20.1054 8.29289 20.2929C8.10536 20.4804 8 20.7348 8 21C8 21.2652 8.10536 21.5196 8.29289 21.7071C8.48043 21.8946 8.73478 22 9 22H15C15.2652 22 15.5196 21.8946 15.7071 21.7071C15.8946 21.5196 16 21.2652 16 21C16 20.7348 15.8946 20.4804 15.7071 20.2929C15.5196 20.1054 15.2652 20 15 20Z" fill="white"/>
          </svg>
          </button>
        </div>
      </div>

      <div className="flex-shrink-0 w-[400px] bg-[#17202e] border-l border-[#252e3d] overflow-auto">
        <div className="pt-10 pb-3 px-4 w-full">
          <ul className='space-y-5'>
            <li className='flex items-center justify-between gap-4'>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded overflow-hidden">
                  <img src={user1} className="w-full" alt="" />
                </div>
                <div>
                  <h3 className='text-white text-sm font-medium'>Natura</h3>
                  <span className='block text-slate-400 text-xs'>Project Manager</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className='text-xs inline-block text-blue-400 border border-blue-400 rounded-3xl px-2 bg-blue-100/40'>Host</span>
                <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.0609 15 14.0783 14.5786 14.8284 13.8284C15.5786 13.0783 16 12.0609 16 11V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V11C8 12.0609 8.42143 13.0783 9.17157 13.8284C9.92172 14.5786 10.9391 15 12 15Z" fill="white"/>
                  <path d="M19 11C19 10.7348 18.8946 10.4804 18.7071 10.2929C18.5196 10.1054 18.2652 10 18 10C17.7348 10 17.4804 10.1054 17.2929 10.2929C17.1054 10.4804 17 10.7348 17 11C17 12.3261 16.4732 13.5979 15.5355 14.5355C14.5979 15.4732 13.3261 16 12 16C10.6739 16 9.40215 15.4732 8.46447 14.5355C7.52678 13.5979 7 12.3261 7 11C7 10.7348 6.89464 10.4804 6.70711 10.2929C6.51957 10.1054 6.26522 10 6 10C5.73478 10 5.48043 10.1054 5.29289 10.2929C5.10536 10.4804 5 10.7348 5 11C5.00197 12.6818 5.60941 14.3068 6.71118 15.5775C7.81295 16.8482 9.3354 17.6797 11 17.92V20H8.89C8.65396 20 8.42758 20.0938 8.26068 20.2607C8.09377 20.4276 8 20.654 8 20.89V21.11C8 21.346 8.09377 21.5724 8.26068 21.7393C8.42758 21.9062 8.65396 22 8.89 22H15.11C15.346 22 15.5724 21.9062 15.7393 21.7393C15.9062 21.5724 16 21.346 16 21.11V20.89C16 20.654 15.9062 20.4276 15.7393 20.2607C15.5724 20.0938 15.346 20 15.11 20H13V17.92C14.6646 17.6797 16.187 16.8482 17.2888 15.5775C18.3906 14.3068 18.998 12.6818 19 11Z" fill="white"/>
                </svg>
                </button>
                <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.103 2.897 19 4 19H16C17.103 19 18 18.103 18 17V13.667L22 17V7L18 10.333V7Z" fill="white"/>
                </svg>

                </button>
              </div>
            </li>
            <li className='flex items-center justify-between gap-4'>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded overflow-hidden">
                  <img src={user2} className="w-full" alt="" />
                </div>
                <div>
                  <h3 className='text-white text-sm font-medium'>Cecile</h3>
                  <span className='block text-slate-400 text-xs'>Software Developer</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className='text-xs inline-block text-blue-400 border border-blue-400 rounded-3xl px-2 bg-blue-100/40'>Co-Host</span>
                <button className='opacity-50'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.58 12.7501C15.8511 12.2062 15.9947 11.6077 16 11.0001V6.00005C15.9889 5.01225 15.6128 4.06348 14.9439 3.3365C14.275 2.60951 13.3608 2.15575 12.3773 2.06262C11.3939 1.96949 10.4107 2.24358 9.61731 2.83208C8.82387 3.42059 8.27628 4.28188 8.08 5.25005M19 11.0001C19 10.7348 18.8946 10.4805 18.7071 10.2929C18.5196 10.1054 18.2652 10.0001 18 10.0001C17.7348 10.0001 17.4804 10.1054 17.2929 10.2929C17.1054 10.4805 17 10.7348 17 11.0001C16.9971 11.8737 16.7587 12.7304 16.31 13.4801L17.78 15.0001C18.5847 13.8222 19.0104 12.4266 19 11.0001V11.0001ZM12 15.0001H12.16L8 10.8301V11.0001C8 12.0609 8.42143 13.0783 9.17157 13.8285C9.92172 14.5786 10.9391 15.0001 12 15.0001ZM20.71 19.2901L4.71 3.29005C4.61676 3.19681 4.50607 3.12285 4.38425 3.07239C4.26243 3.02193 4.13186 2.99596 4 2.99596C3.86814 2.99596 3.73757 3.02193 3.61575 3.07239C3.49393 3.12285 3.38324 3.19681 3.29 3.29005C3.10169 3.47836 2.99591 3.73375 2.99591 4.00005C2.99591 4.26635 3.10169 4.52175 3.29 4.71005L19.29 20.7101C19.383 20.8038 19.4936 20.8782 19.6154 20.9289C19.7373 20.9797 19.868 21.0058 20 21.0058C20.132 21.0058 20.2627 20.9797 20.3846 20.9289C20.5064 20.8782 20.617 20.8038 20.71 20.7101C20.8037 20.6171 20.8781 20.5065 20.9289 20.3846C20.9797 20.2628 21.0058 20.1321 21.0058 20.0001C21.0058 19.868 20.9797 19.7373 20.9289 19.6155C20.8781 19.4936 20.8037 19.383 20.71 19.2901V19.2901Z" fill="white"/>
                  <path d="M15 20H13V17.92C13.5659 17.8412 14.12 17.6935 14.65 17.48L13.05 15.88C12.7058 15.9605 12.3535 16.0007 12 16C10.6739 16 9.40215 15.4732 8.46447 14.5355C7.52678 13.5979 7 12.3261 7 11C7 10.7348 6.89464 10.4804 6.70711 10.2929C6.51957 10.1054 6.26522 10 6 10C5.73478 10 5.48043 10.1054 5.29289 10.2929C5.10536 10.4804 5 10.7348 5 11C5.00197 12.6818 5.60941 14.3068 6.71118 15.5775C7.81295 16.8482 9.3354 17.6797 11 17.92V20H9C8.73478 20 8.48043 20.1054 8.29289 20.2929C8.10536 20.4804 8 20.7348 8 21C8 21.2652 8.10536 21.5196 8.29289 21.7071C8.48043 21.8946 8.73478 22 9 22H15C15.2652 22 15.5196 21.8946 15.7071 21.7071C15.8946 21.5196 16 21.2652 16 21C16 20.7348 15.8946 20.4804 15.7071 20.2929C15.5196 20.1054 15.2652 20 15 20Z" fill="white"/>
                </svg>
                </button>
                <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.103 2.897 19 4 19H16C17.103 19 18 18.103 18 17V13.667L22 17V7L18 10.333V7Z" fill="white"/>
                </svg>

                </button>
              </div>
            </li>
            <li className='flex items-center justify-between gap-4'>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded overflow-hidden">
                  <img src={user3} className="w-full" alt="" />
                </div>
                <div>
                  <h3 className='text-white text-sm font-medium'>Nico</h3>
                  <span className='block text-slate-400 text-xs'>UI/UX Designer</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* <span className='text-xs inline-block text-blue-400 border border-blue-400 rounded-3xl px-2 bg-blue-100/40'>Co-Host</span> */}
                <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.0609 15 14.0783 14.5786 14.8284 13.8284C15.5786 13.0783 16 12.0609 16 11V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V11C8 12.0609 8.42143 13.0783 9.17157 13.8284C9.92172 14.5786 10.9391 15 12 15Z" fill="white"/>
                  <path d="M19 11C19 10.7348 18.8946 10.4804 18.7071 10.2929C18.5196 10.1054 18.2652 10 18 10C17.7348 10 17.4804 10.1054 17.2929 10.2929C17.1054 10.4804 17 10.7348 17 11C17 12.3261 16.4732 13.5979 15.5355 14.5355C14.5979 15.4732 13.3261 16 12 16C10.6739 16 9.40215 15.4732 8.46447 14.5355C7.52678 13.5979 7 12.3261 7 11C7 10.7348 6.89464 10.4804 6.70711 10.2929C6.51957 10.1054 6.26522 10 6 10C5.73478 10 5.48043 10.1054 5.29289 10.2929C5.10536 10.4804 5 10.7348 5 11C5.00197 12.6818 5.60941 14.3068 6.71118 15.5775C7.81295 16.8482 9.3354 17.6797 11 17.92V20H8.89C8.65396 20 8.42758 20.0938 8.26068 20.2607C8.09377 20.4276 8 20.654 8 20.89V21.11C8 21.346 8.09377 21.5724 8.26068 21.7393C8.42758 21.9062 8.65396 22 8.89 22H15.11C15.346 22 15.5724 21.9062 15.7393 21.7393C15.9062 21.5724 16 21.346 16 21.11V20.89C16 20.654 15.9062 20.4276 15.7393 20.2607C15.5724 20.0938 15.346 20 15.11 20H13V17.92C14.6646 17.6797 16.187 16.8482 17.2888 15.5775C18.3906 14.3068 18.998 12.6818 19 11Z" fill="white"/>
                </svg>
                </button>
                <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.103 2.897 19 4 19H16C17.103 19 18 18.103 18 17V13.667L22 17V7L18 10.333V7Z" fill="white"/>
                </svg>
                </button>
              </div>
            </li>
            <li className='flex items-center justify-between gap-4'>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded overflow-hidden">
                  <img src={user4} className="w-full" alt="" />
                </div>
                <div>
                  <h3 className='text-white text-sm font-medium'>Bryan</h3>
                  <span className='block text-slate-400 text-xs'>Ethical Hacker</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* <span className='text-xs inline-block text-blue-400 border border-blue-400 rounded-3xl px-2 bg-blue-100/40'>Co-Host</span> */}
                <button className='opacity-50'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.58 12.7501C15.8511 12.2062 15.9947 11.6077 16 11.0001V6.00005C15.9889 5.01225 15.6128 4.06348 14.9439 3.3365C14.275 2.60951 13.3608 2.15575 12.3773 2.06262C11.3939 1.96949 10.4107 2.24358 9.61731 2.83208C8.82387 3.42059 8.27628 4.28188 8.08 5.25005M19 11.0001C19 10.7348 18.8946 10.4805 18.7071 10.2929C18.5196 10.1054 18.2652 10.0001 18 10.0001C17.7348 10.0001 17.4804 10.1054 17.2929 10.2929C17.1054 10.4805 17 10.7348 17 11.0001C16.9971 11.8737 16.7587 12.7304 16.31 13.4801L17.78 15.0001C18.5847 13.8222 19.0104 12.4266 19 11.0001V11.0001ZM12 15.0001H12.16L8 10.8301V11.0001C8 12.0609 8.42143 13.0783 9.17157 13.8285C9.92172 14.5786 10.9391 15.0001 12 15.0001ZM20.71 19.2901L4.71 3.29005C4.61676 3.19681 4.50607 3.12285 4.38425 3.07239C4.26243 3.02193 4.13186 2.99596 4 2.99596C3.86814 2.99596 3.73757 3.02193 3.61575 3.07239C3.49393 3.12285 3.38324 3.19681 3.29 3.29005C3.10169 3.47836 2.99591 3.73375 2.99591 4.00005C2.99591 4.26635 3.10169 4.52175 3.29 4.71005L19.29 20.7101C19.383 20.8038 19.4936 20.8782 19.6154 20.9289C19.7373 20.9797 19.868 21.0058 20 21.0058C20.132 21.0058 20.2627 20.9797 20.3846 20.9289C20.5064 20.8782 20.617 20.8038 20.71 20.7101C20.8037 20.6171 20.8781 20.5065 20.9289 20.3846C20.9797 20.2628 21.0058 20.1321 21.0058 20.0001C21.0058 19.868 20.9797 19.7373 20.9289 19.6155C20.8781 19.4936 20.8037 19.383 20.71 19.2901V19.2901Z" fill="white"/>
                  <path d="M15 20H13V17.92C13.5659 17.8412 14.12 17.6935 14.65 17.48L13.05 15.88C12.7058 15.9605 12.3535 16.0007 12 16C10.6739 16 9.40215 15.4732 8.46447 14.5355C7.52678 13.5979 7 12.3261 7 11C7 10.7348 6.89464 10.4804 6.70711 10.2929C6.51957 10.1054 6.26522 10 6 10C5.73478 10 5.48043 10.1054 5.29289 10.2929C5.10536 10.4804 5 10.7348 5 11C5.00197 12.6818 5.60941 14.3068 6.71118 15.5775C7.81295 16.8482 9.3354 17.6797 11 17.92V20H9C8.73478 20 8.48043 20.1054 8.29289 20.2929C8.10536 20.4804 8 20.7348 8 21C8 21.2652 8.10536 21.5196 8.29289 21.7071C8.48043 21.8946 8.73478 22 9 22H15C15.2652 22 15.5196 21.8946 15.7071 21.7071C15.8946 21.5196 16 21.2652 16 21C16 20.7348 15.8946 20.4804 15.7071 20.2929C15.5196 20.1054 15.2652 20 15 20Z" fill="white"/>
                </svg>
                </button>
                <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.103 2.897 19 4 19H16C17.103 19 18 18.103 18 17V13.667L22 17V7L18 10.333V7Z" fill="white"/>
                </svg>
                </button>
              </div>
            </li>
          </ul>
          <div className="flex items-center justify-between gap-4 pt-5">
            <button type='button' className='text-white py-1 px-3 rounded-md bg-slate-600'>Invite</button>
            <button type='button' className='text-white py-1 px-3 rounded-md bg-slate-600'>Mute all</button>
            <button type='button' className='text-white py-1 px-3 rounded-md bg-slate-600'>Ask to start video</button>
          </div>
        </div>

        <div className="flex bg-[#1a2432] items-center justify-between p-4">
          <p className='text-slate-100 text-sm'>Chats(3)</p>
          <button type='button'>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 6.5C9.77019 6.5 9.54262 6.45474 9.3303 6.36679C9.11798 6.27884 8.92507 6.14994 8.76256 5.98744C8.60006 5.82493 8.47116 5.63202 8.38321 5.4197C8.29527 5.20738 8.25 4.97981 8.25 4.75C8.25 4.52019 8.29527 4.29262 8.38321 4.0803C8.47116 3.86798 8.60006 3.67507 8.76256 3.51256C8.92507 3.35006 9.11798 3.22116 9.3303 3.13321C9.54262 3.04527 9.77019 3 10 3C10.4641 3 10.9092 3.18437 11.2374 3.51256C11.5656 3.84075 11.75 4.28587 11.75 4.75C11.75 5.21413 11.5656 5.65925 11.2374 5.98744C10.9092 6.31563 10.4641 6.5 10 6.5ZM10 17C9.53587 17 9.09075 16.8156 8.76256 16.4874C8.43437 16.1592 8.25 15.7141 8.25 15.25C8.25 14.7859 8.43437 14.3408 8.76256 14.0126C9.09075 13.6844 9.53587 13.5 10 13.5C10.4641 13.5 10.9092 13.6844 11.2374 14.0126C11.5656 14.3408 11.75 14.7859 11.75 15.25C11.75 15.7141 11.5656 16.1592 11.2374 16.4874C10.9092 16.8156 10.4641 17 10 17ZM8.25 10C8.25 10.2298 8.29527 10.4574 8.38321 10.6697C8.47116 10.882 8.60006 11.0749 8.76256 11.2374C8.92507 11.3999 9.11798 11.5288 9.3303 11.6168C9.54262 11.7047 9.77019 11.75 10 11.75C10.2298 11.75 10.4574 11.7047 10.6697 11.6168C10.882 11.5288 11.0749 11.3999 11.2374 11.2374C11.3999 11.0749 11.5288 10.882 11.6168 10.6697C11.7047 10.4574 11.75 10.2298 11.75 10C11.75 9.53587 11.5656 9.09075 11.2374 8.76256C10.9092 8.43437 10.4641 8.25 10 8.25C9.53587 8.25 9.09075 8.43437 8.76256 8.76256C8.43437 9.09075 8.25 9.53587 8.25 10Z" fill="white"/>
          </svg>
          </button>
        </div>

        <div className="py-10 px-4">
          <ul className='space-y-10'>
            <li className='flex gap-4'>
              <div className="h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                <img src={user1} className="w-full" alt="" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <p className='text-xs text-slate-300'>from <span className='text-blue-400'>Marry</span> to <span className='text-blue-400'>Everyone</span></p>
                  <p className='text-xs text-slate-300'>05:32 PM</p>
                </div>
                <p className='text-sm text-slate-200 p-2 border border-slate-600 bg-[#26303f] rounded-md'>Hi there, how are you?</p>
              </div>
            </li>
            <li className='flex gap-4 flex-row-reverse'>
              <div className="h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                <img src={user2} className="w-full" alt="" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <p className='text-xs text-slate-300'>from <span className='text-blue-400'>Marry</span> to <span className='text-blue-400'>Everyone</span></p>
                  <p className='text-xs text-slate-300'>05:32 PM</p>
                </div>
                <p className='text-sm text-slate-200 p-2 border border-slate-600 bg-[#192b42] rounded-md'>I am great Thanks! how are you?</p>
              </div>
            </li>
            <li className='flex gap-4'>
              <div className="h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                <img src={user3} className="w-full" alt="" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <p className='text-xs text-slate-300'>from <span className='text-blue-400'>Marry</span> to <span className='text-blue-400'>Everyone</span></p>
                  <p className='text-xs text-slate-300'>05:32 PM</p>
                </div>
                <p className='text-sm text-slate-200 p-2 border border-slate-600 bg-[#26303f] rounded-md'>Hi there, how are you?</p>
              </div>
            </li>
            <li className='flex gap-4 flex-row-reverse'>
              <div className="h-8 w-8 rounded-full overflow-hidden flex-shrink-0">
                <img src={user4} className="w-full" alt="" />
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <p className='text-xs text-slate-300'>from <span className='text-blue-400'>Marry</span> to <span className='text-blue-400'>Everyone</span></p>
                  <p className='text-xs text-slate-300'>05:32 PM</p>
                </div>
                <p className='text-sm text-slate-200 p-2 border border-slate-600 bg-[#192b42] rounded-md'>Hi there, how are you?</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="p-4 border-t border-[#252e3d]">
          <div className="flex items-center justify-between">
            <p className='px-2 py-1 text-sm text-slate-200 bg-[#26303f] rounded'>Everyone</p>
            <div className="flex items-center gap-4">
              <button>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.29 21C8.46382 20.9961 7.64668 20.8278 6.88614 20.505C6.1256 20.1823 5.43686 19.7115 4.86 19.12C4.28746 18.5774 3.82755 17.9272 3.50658 17.2066C3.18561 16.486 3.00987 15.7092 2.98944 14.9207C2.96901 14.1321 3.10427 13.3472 3.38749 12.611C3.67071 11.8748 4.09633 11.2016 4.64 10.63L12 3.20003C12.393 2.80771 12.8615 2.49911 13.3771 2.29286C13.8927 2.08662 14.4448 1.987 15 2.00003C15.5947 2.00206 16.1831 2.12247 16.7307 2.35425C17.2784 2.58603 17.7745 2.92454 18.19 3.35003C19.017 4.14627 19.4966 5.23655 19.5247 6.38421C19.5527 7.53187 19.1271 8.6443 18.34 9.48003L10.94 16.91C10.703 17.1487 10.4209 17.3378 10.1102 17.4666C9.79951 17.5953 9.46632 17.6611 9.13 17.66C8.76667 17.6605 8.40693 17.5882 8.07201 17.4474C7.7371 17.3065 7.43379 17.1 7.18 16.84C6.67272 16.3489 6.37977 15.6774 6.36479 14.9715C6.34981 14.2656 6.61402 13.5823 7.1 13.07L13.93 6.21003C14.1244 6.08094 14.3578 6.02388 14.5898 6.04875C14.8218 6.07362 15.0378 6.17884 15.2004 6.34619C15.3631 6.51355 15.462 6.7325 15.4802 6.96514C15.4984 7.19778 15.4346 7.42945 15.3 7.62003L8.47 14.48C8.3561 14.6172 8.30067 14.7937 8.31563 14.9714C8.3306 15.1491 8.41476 15.3138 8.55 15.43C8.69071 15.5717 8.8804 15.654 9.08 15.66C9.15393 15.6611 9.22734 15.6475 9.296 15.62C9.36465 15.5926 9.42719 15.5518 9.48 15.5L16.87 8.07003C17.2848 7.60921 17.5016 7.00367 17.4735 6.38428C17.4455 5.7649 17.1748 5.18144 16.72 4.76003C16.2976 4.32147 15.7231 4.06149 15.1149 4.03359C14.5066 4.00569 13.9108 4.21199 13.45 4.61003L6.06 12C5.70064 12.386 5.42116 12.8392 5.23762 13.3336C5.05409 13.828 4.97013 14.3538 4.99058 14.8808C5.01102 15.4078 5.13547 15.9255 5.35676 16.4042C5.57805 16.8829 5.89181 17.3131 6.28 17.67C6.66927 18.0736 7.13506 18.3955 7.65016 18.617C8.16525 18.8385 8.71932 18.9551 9.28 18.96C9.76341 18.964 10.2428 18.8723 10.6908 18.6904C11.1387 18.5085 11.5462 18.2399 11.89 17.9L19.28 10.47C19.3726 10.3768 19.4826 10.3027 19.6038 10.252C19.725 10.2013 19.8551 10.1749 19.9865 10.1745C20.1179 10.174 20.2481 10.1994 20.3696 10.2493C20.4912 10.2991 20.6018 10.3725 20.695 10.465C20.7882 10.5576 20.8623 10.6677 20.913 10.7889C20.9637 10.9101 20.9901 11.0401 20.9906 11.1715C20.991 11.3029 20.9656 11.4331 20.9157 11.5547C20.8659 11.6762 20.7926 11.7868 20.7 11.88L13.31 19.31C12.7853 19.844 12.1597 20.2684 11.4696 20.5585C10.7795 20.8486 10.0386 20.9987 9.29 21V21Z" fill="white"/>
</svg>
              </button>
              <button>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_409_3223)">
<path d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16V16Z" fill="white"/>
<path d="M4.285 9.567C4.39984 9.5007 4.53631 9.48273 4.6644 9.51705C4.79249 9.55137 4.90169 9.63516 4.968 9.75C5.27511 10.2823 5.71705 10.7244 6.24933 11.0316C6.78161 11.3388 7.38543 11.5004 8 11.5C8.61457 11.5004 9.2184 11.3388 9.75067 11.0316C10.2829 10.7244 10.7249 10.2823 11.032 9.75C11.0646 9.69268 11.1082 9.64237 11.1603 9.60197C11.2124 9.56157 11.272 9.53187 11.3357 9.5146C11.3993 9.49732 11.4657 9.4928 11.5311 9.5013C11.5965 9.5098 11.6596 9.53115 11.7167 9.56412C11.7738 9.59709 11.8238 9.64103 11.8638 9.69341C11.9039 9.74579 11.9332 9.80558 11.9501 9.86933C11.9669 9.93308 11.971 9.99953 11.9621 10.0649C11.9531 10.1302 11.9313 10.1931 11.898 10.25C11.5031 10.9344 10.9349 11.5026 10.2507 11.8976C9.56637 12.2926 8.79011 12.5004 8 12.5C7.2099 12.5004 6.43363 12.2926 5.74934 11.8976C5.06505 11.5026 4.49688 10.9344 4.102 10.25C4.0357 10.1352 4.01773 9.99869 4.05205 9.8706C4.08637 9.74251 4.17016 9.63331 4.285 9.567ZM7 6.5C7 7.328 6.552 8 6 8C5.448 8 5 7.328 5 6.5C5 5.672 5.448 5 6 5C6.552 5 7 5.672 7 6.5ZM11 6.5C11 7.328 10.552 8 10 8C9.448 8 9 7.328 9 6.5C9 5.672 9.448 5 10 5C10.552 5 11 5.672 11 6.5Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_409_3223">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>

              </button>
            </div>
            </div>
            <div className="flex gap-4 mt-10">
              <input type="text" placeholder='Message to everyone...' className='bg-transparent w-full text-white outline-none' />
              <button className='h-10 w-10 rounded bg-blue-500 flex items-center justify-center flex-shrink-0'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.721 2.05101L18.076 9.61701C18.1597 9.65827 18.2302 9.72215 18.2795 9.80141C18.3289 9.88068 18.355 9.97216 18.355 10.0655C18.355 10.1589 18.3289 10.2503 18.2795 10.3296C18.2302 10.4089 18.1597 10.4727 18.076 10.514L2.72 18.08C2.63397 18.1223 2.53761 18.1389 2.44239 18.128C2.34717 18.117 2.2571 18.0789 2.18292 18.0182C2.10874 17.9575 2.05357 17.8768 2.02397 17.7856C1.99438 17.6945 1.99161 17.5967 2.016 17.504L3.537 11.759C3.56165 11.666 3.6126 11.5822 3.68372 11.5174C3.75485 11.4527 3.84313 11.4098 3.938 11.394L10.819 10.247C10.86 10.2402 10.8987 10.2233 10.9315 10.1978C10.9643 10.1723 10.9903 10.1391 11.007 10.101L11.025 10.041C11.0343 9.9854 11.0246 9.92826 10.9974 9.87889C10.9701 9.82951 10.927 9.79079 10.875 9.76901L10.819 9.75301L3.9 8.60001C3.80531 8.584 3.71724 8.54107 3.64631 8.47635C3.57538 8.41162 3.52458 8.32784 3.5 8.23501L2.016 2.62801C1.99136 2.53525 1.99393 2.43736 2.02342 2.34602C2.05291 2.25468 2.10806 2.17376 2.18229 2.11292C2.25652 2.05209 2.34669 2.0139 2.44204 2.00292C2.53739 1.99194 2.63388 2.00863 2.72 2.05101H2.721Z" fill="white"/>
</svg>
              </button>
            </div>
          
        </div>


      </div>
    </div>
  )
}

export default JoinMeeting