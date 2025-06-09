import React from 'react'
import Languages from './Languages';
// import './App.css'


const Footer = () => {
  const footerItems = [
    {
      title: 'Meta',
      link: 'https://www.meta.com/en-gb/about/?utm_source=about.meta.com&utm_medium=redirect'
    },
    {
      title: 'About',
      link: 'https://about.instagram.com/'
    },
    {
      title: 'Blog',
      link: 'https://about.instagram.com/blog'
    },
    {
      title: 'Jobs',
      link: 'https://about.instagram.com/about-us/careers'
    },
    {
      title: 'Help',
      link: 'https://help.instagram.com/'
    },
    {
      title: 'API',
      link: 'https://developers.facebook.com/docs/instagram-platform'
    },
    {
      title: 'Privacy',
      link: 'https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect'
    },
    {
      title: 'Terms',
      link: 'https://help.instagram.com/581066165581870/'
    },
    {
      title: 'Locations',
      link: 'https://www.instagram.com/explore/locations/'
    },
    {
      title: ' Instagram Lite',
      link: 'https://www.instagram.com/web/lite/'
    },
    {
      title: 'Threads',
      link: 'https://www.threads.com/'
    },
    {
      title: 'Contact Uploading & Non-Users',
      link: 'https://www.facebook.com/help/instagram/261704639352628'
    },
    {
      title: 'Meta Verified',
      link: 'https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fmeta_verified%2F%3Fentrypoint%3Dweb_footer%26__coig_login%3D1#'
    }
  ]
  
  return (
    <div>
      {/* Footer Menu */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2%', justifyContent: 'center', alignItems: 'center', marginTop: '15vh' }} id='footer'>

        {
          footerItems.map(function (item) {
            return (
              <div ><a style={{ fontSize: '0.6rem', color: 'gray', fontWeight: 'normal' }} href={item.link} target='_blank'>{item.title}</a></div>

            )
          })
        }
      </div>
      {/* Lang & copyright */}
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'1vh',gap:'0.5rem'}}>
        <Languages/>
        <p style={{color:'gray',fontSize:'0.6rem'}}>© 2025 Instagram from Meta</p>
      </div>
    </div>

  )
}

export default Footer
