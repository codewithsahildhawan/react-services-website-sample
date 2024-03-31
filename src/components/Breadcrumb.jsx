import React from 'react'

export default function Breadcrumb() {
  return (
    <div>
      <div class="container-fluid bg-breadcrumb">
            <div class="container text-center py-5" style= {{ maxWidth: "900px" }}>
                <h3 class="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Contact Us</h3>
                <ol class="breadcrumb justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                    <li class="breadcrumb-item active text-primary">Contact</li>
                </ol>    
            </div>
        </div>
    </div>
  )
}
