import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Gallery.module.css";
import PageHero from "../../components/PageHero";
import Footer from "../../components/Footer";
import { PUBLIC_ASSETS } from "../../constants/assets";
import {
  ArrowUpIconComponent,
  ArrowUpWhiteIconComponent,
} from "../../components/Icons";

// Gallery images with varying heights to match Figma design - using actual project images
const galleryImages = [
  // Classroom images
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753056/_OP_9001_gj0bek.jpg",
    height: "tall",
    category: "Culture",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753058/_OP_9037_s3nppy.jpg",
    height: "medium",
    category: "Culture",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753049/_OP_8834_nz9b4j.jpg",
    height: "short",
    category: "Culture",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_9054.jpg?alt=media&token=0428cde0-1cce-4ff4-8338-bae8628dff81",
    height: "tall",
    category: "Culture",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753047/_OP_8752_ty7s6q.jpg",
    height: "medium",
    category: "Culture",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755327598/_OP_9145_fwbov5.jpg",
    height: "short",
    category: "Culture",
  },

  // Academics images
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755327598/_OP_9145_fwbov5.jpg",
    height: "medium",
    category: "Academics",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381069/_OP_9122_hjty9i.jpg",
    height: "tall",
    category: "Academics",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381219/_OP_9287_zzebec.jpg",
    height: "short",
    category: "Academics",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381219/_OP_9274_yj14og.jpg",
    height: "medium",
    category: "Academics",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381218/_OP_8717_rndak9.jpg",
    height: "medium",
    category: "Academics",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381218/_OP_8717_rndak9.jpg",
    height: "medium",
    category: "Academics",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381277/WhatsApp_Image_2025-08-12_at_5.12.23_PM_dbkzf8.jpg",
    height: "medium",
    category: "Academics",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381218/_OP_8709_igiejq.jpg",
    height: "medium",
    category: "Academics",
  },

  // Campus images
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8497.jpg?alt=media&token=79c63cc0-4d5f-431a-99b6-f1e0ea106ecb",
    height: "tall",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8507.jpg?alt=media&token=350b968f-4f7b-4826-a5ea-0438d6d11e5d",
    height: "short",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8537.jpg?alt=media&token=806f6375-eabe-4bea-98a9-3a74e70dce20",
    height: "medium",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8551.jpg?alt=media&token=dabedda4-44d3-4c7d-9bab-cee6a0c4a0d6",
    height: "tall",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8571.jpg?alt=media&token=c5b38f9d-e847-41b3-81f4-d01ea038a640",
    height: "short",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8576.jpg?alt=media&token=1ae2ab97-4270-4efd-ae9b-2a7e513520eb",
    height: "medium",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8583.jpg?alt=media&token=66a6db7f-3e84-421d-9fec-cab2d6c8fc91",
    height: "tall",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8588.jpg?alt=media&token=d9d39168-32a7-4d17-a0d6-6140b632337b",
    height: "tall",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8599.jpg?alt=media&token=3d58d81f-7a5a-42ae-88f2-a86aa3763ec2",
    height: "short",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8603.jpg?alt=media&token=4bb3f748-5c52-4840-b1b2-aa4faca8f522",
    height: "medium",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8626.jpg?alt=media&token=9ca37491-3e1b-4734-bbff-6e56a11fac87",
    height: "tall",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8629.jpg?alt=media&token=5803f335-19bd-4645-adcc-5c955a2b51cd",
    height: "short",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8634.jpg?alt=media&token=85cb9bd1-4585-414c-8699-76cc18e7ed5f",
    height: "medium",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8636.jpg?alt=media&token=bfb051ef-2671-4d09-8919-06190080536e",
    height: "tall",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8638.jpg?alt=media&token=9bbaac0e-4170-473d-a0a4-9dca6c9ee3aa",
    height: "medium",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8644.jpg?alt=media&token=412483ae-9826-4726-bc72-65e196d05bc1",
    height: "tall",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8652.jpg?alt=media&token=9d35e7a7-7dc0-46e1-8148-6bc3a6161169",
    height: "short",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8698.jpg?alt=media&token=62592559-9292-44b2-8df5-528ad5b3ad0f",
    height: "medium",
    category: "Campus",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8730.jpg?alt=media&token=75e73691-bc7f-436d-ae15-7c745b0e6d80",
    height: "tall",
    category: "Campus",
  },

  // Sports images
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381442/WhatsApp_Image_2025-08-12_at_5.58.44_PM_1_ffa58a.jpg",
    height: "short",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381442/WhatsApp_Image_2025-08-12_at_5.58.43_PM_rizuac.jpg",
    height: "medium",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381441/WhatsApp_Image_2025-08-12_at_5.58.44_PM_fmsjc8.jpg",
    height: "tall",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381441/WhatsApp_Image_2025-08-12_at_5.58.45_PM_jqzqlx.jpg",
    height: "short",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381382/WhatsApp_Image_2025-08-12_at_5.52.38_PM_1_ufmyie.jpg",
    height: "medium",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381381/WhatsApp_Image_2025-08-12_at_5.53.39_PM_1_vbwxms.jpg",
    height: "tall",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381379/WhatsApp_Image_2025-08-12_at_5.54.52_PM_1_txrqno.jpg",
    height: "short",
    category: "Sports",
  },
  // ////////
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1755381378/WhatsApp_Image_2025-08-12_at_5.55.14_PM_1_amjsfg.jpg",
    height: "short",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753053/_OP_8918_xq0twl.jpg",
    height: "medium",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753053/_OP_8910_pqbba2.jpg",
    height: "tall",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753049/_OP_8846_lyifo5.jpg",
    height: "short",
    category: "Sports",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/nis-website-6e576.firebasestorage.app/o/_OP_8894.jpg?alt=media&token=678d8560-1f26-44f6-9e3f-53e4f439e72e",
    height: "medium",
    category: "Sports",
  },
  {
    src: "https://res.cloudinary.com/dgslbycvk/image/upload/v1754754812/_OP_8688_tx5czy.jpg",
    height: "tall",
    category: "Sports",
  },
  ///
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8345-scaled-1-1024x683.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8267-300x169-1.jpg",
    height: "medium",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8313-300x189-1.jpg",
    height: "tall",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8365-300x200-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/fe6b2ef8-a257-4ac0-b1a4-1d77866e37fd-300x214-1.jpg",
    height: "medium",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/f0894e37-88ed-4bf0-8ade-9d6977b47f30-300x214-1.jpg",
    height: "tall",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/f0f44602-265c-4e02-8191-a09b9f5c5e41-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/affef6ae-3b55-41c7-ac6a-b0535f90c5d9-300x214-1.jpg",
    height: "medium",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/afd1e24c-708b-4c7e-9f89-4fafe07d44da-300x214-1.jpg",
    height: "tall",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/5aac988e-0547-4e21-bc17-cd72c51b4f45-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/6dde5ba6-66d0-4e69-9f1c-1111ffc7400f-300x214-1.jpg",
    height: "medium",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/8b6e2686-9614-471a-8340-d30a6525e063-214x300-1.jpg",
    height: "tall",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/87e2f5ea-e75f-4973-82ab-3f5b4cd1108a-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/0924b9e4-e229-4524-99f5-b8fa30f70a9f-300x214-1.jpg",
    height: "medium",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/86951821-f522-4551-a007-b0d7eb4a5539-300x214-1.jpg",
    height: "tall",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/4deb7d1b-6340-48ef-a2f3-1d015e3761d8-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/00fcfbff-d5c2-4882-b0fc-66ada6bc851e-300x214-1.jpg",
    height: "medium",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8370-300x186-1.jpg",
    height: "tall",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8076-300x189-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8076-300x189-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8097-300x189-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8762-300x189-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8526-300x189-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8556-300x189-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8643-300x189-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8682-300x189-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8747-300x189-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8089-300x189-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8194-300x189-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8333-300x169-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8304-300x169-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8215-300x200-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8207-300x200-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8199-300x200-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8198-300x200-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/ffb10862-01ed-495e-bed4-181490fe28e2-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/ef70a4bb-7b4c-455d-b9e5-ba7ba68f9dd6-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/e3c11e14-58c3-4d31-a553-d58dfab000b7-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/afd1e24c-708b-4c7e-9f89-4fafe07d44da-300x214-2.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/a6c77a53-52ba-4add-ac4e-e231f6533fb6-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/87185509-bc75-4fe2-867f-52def721a62e-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/1856446a-5b01-460c-90ff-6a1680b3a9f4-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/994ca70e-c53f-41b7-a13c-bc8b147262df-300x214-2.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/9608d10f-e91c-409c-90be-f7073047755d-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/11567a62-19a0-4379-89dc-c8bd43a9f870-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/28325d20-c857-4d4a-9b46-4bcf42d8519c-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/36702f56-acf8-4cea-bc33-2ef0d10de180-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/48668dd5-ec89-4fb5-ba91-f97896f1a068-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/0924b9e4-e229-4524-99f5-b8fa30f70a9f-300x214-2.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/36702f56-acf8-4cea-bc33-2ef0d10de180-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/302b2052-9045-4596-a136-2a39b4c3a811-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/85c39829-c815-4a8d-b0aa-c715a0da1685-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/77ef117d-4192-423b-8aa8-b2405ecb15f4-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/75f8c1ab-30b6-4ba9-8d2b-e04d5a6e7aa2-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8334-300x200-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/9a0b0538-28e0-44a1-94d2-976a9e99bf99-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/16f0ff71-e60c-4ca5-8025-d5225bca6914-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/38cf9a0c-7de2-4f71-9db9-e5b801213ef9-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/53b9231e-55be-412f-860f-0a890e794844-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/73ac6923-109f-486d-81c6-8939c150cb48-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/608c25ea-c776-4ec2-941e-e76151e4d7fa-300x214-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
  {
    src: "https://norwegianinternationalschools.com/wp-content/uploads/2024/06/IMG_8243-300x189-1.jpg",
    height: "short",
    category: "NIS @ 40",
  },
];

const categories = [
  { name: "All", images: galleryImages },
  {
    name: "Culture",
    images: galleryImages.filter((img) => img.category === "Culture"),
  },
  {
    name: "Academics",
    images: galleryImages.filter((img) => img.category === "Academics"),
  },
  {
    name: "Campus",
    images: galleryImages.filter((img) => img.category === "Campus"),
  },
  {
    name: "Sports",
    images: galleryImages.filter((img) => img.category === "Sports"),
  },
  {
    name: "NIS @ 40",
    images: galleryImages.filter((img) => img.category === "NIS @ 40"),
  },
];

const Admission: React.FC = () => {
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<typeof galleryImages>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleMenuClick = () => {
    console.log("Menu clicked from Admission page");
  };

  const handleNISExperienceClick = () => {
    console.log("NIS Experience clicked from Admission page");
    navigate("/nis-experience");
  };

  const handleTakeATourClick = () => {
    console.log("Take a Tour clicked from Admission page");
    navigate("/tour");
  };

  const handleApplyClick = () => {
    console.log("Apply clicked from Admission page");
    // Add application logic
  };

  useEffect(() => {
    // Firebase image URL for hero background
    const firebaseImageUrl =
      "https://res.cloudinary.com/dgslbycvk/image/upload/v1754753061/_OP_9310_h4qfad.jpg";

    // Test if the image loads successfully
    const img = new Image();
    img.onload = () => {
      console.log("Firebase image loaded successfully");
      setBackgroundImage(firebaseImageUrl);
    };
    img.onerror = () => {
      console.error("Failed to load Firebase image, using fallback");
      setBackgroundImage(PUBLIC_ASSETS.icons.aboutUsHero);
    };
    img.src = firebaseImageUrl;
  }, []);

  // Loading effect - 3 seconds delay to ensure images are populated
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  const getImages = () => {
    if (selectedCategory === "All") {
      return galleryImages;
    }
    return (
      categories.find((cat) => cat.name === selectedCategory)?.images || []
    );
  };

  const filteredImages = getImages();

  // Handle category change with loading
  const handleCategoryChange = (categoryName: string) => {
    if (categoryName === selectedCategory) return; // Don't reload if same category

    setIsLoading(true);
    setSelectedCategory(categoryName);

    // Show loading for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  // Lightbox functions
  const openLightbox = (imageIndex: number) => {
    console.log(`lightbox:`);
    const images = getImages();
    setCurrentImages(images);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImageIndex(0);
    document.body.style.overflow = "unset"; // Restore scrolling
  };

  const goToNextImage = () => {
    if (currentImageIndex < currentImages.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const goToPrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        if (currentImageIndex < currentImages.length - 1) {
          setCurrentImageIndex(currentImageIndex + 1);
        }
      } else if (e.key === "ArrowLeft") {
        if (currentImageIndex > 0) {
          setCurrentImageIndex(currentImageIndex - 1);
        }
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [lightboxOpen, currentImageIndex, currentImages.length]);

  console.log("Background image URL:", backgroundImage);

  return (
    <div className={styles.nisExperiencePage}>
      {/* Page Hero Section */}
      <PageHero
        backgroundImage={backgroundImage}
        title="Real Moments, Real Voices"
        subtitle="THE NIS EXPERIENCE"
        onMenuClick={handleMenuClick}
        onNISExperienceClick={handleNISExperienceClick}
        onTakeATourClick={handleTakeATourClick}
        onApplyClick={handleApplyClick}
      />

      <div className={styles.bodyContent}>
        {/* Gallery Section */}
        <div className={styles.galleryPage}>
          {/* Category Tabs - Always visible */}
          <div className={styles.categoryTabs}>
            {categories.map((cat) => (
              <button
                key={cat.name}
                className={
                  selectedCategory === cat.name ? styles.activeTab : styles.tab
                }
                onClick={() => handleCategoryChange(cat.name)}
                disabled={isLoading} // Disable during loading
              >
                {cat.name}
              </button>
            ))}
          </div>

          {isLoading ? (
            /* Loading Spinner */
            <div className={styles.loadingContainer}>
              <div className={styles.spinner}></div>
              <p className={styles.loadingText}>
                Loading{" "}
                {selectedCategory === "All" ? "Gallery" : selectedCategory}...
              </p>
            </div>
          ) : (
            /* Gallery Content */
            <div className={styles.masonryGallery}>
              {filteredImages.map((img, idx) => (
                <div
                  className={`${styles.galleryCard} ${styles[img.height]}`}
                  key={idx}
                  onClick={() => openLightbox(idx)}
                  style={{ cursor: "pointer" }}
                >
                  <div className={styles.imageContainer}>
                    <img
                      src={img.src}
                      alt="Gallery"
                      className={styles.galleryImage}
                    />
                    <div className={styles.imageOverlay}>
                      <div className={styles.overlayContent}>
                        {/* <span className={styles.viewIcon}>👁</span> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Twitter-style Lightbox */}
      {lightboxOpen && (
        <div className={styles.lightboxOverlay} onClick={closeLightbox}>
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button className={styles.lightboxClose} onClick={closeLightbox}>
              ×
            </button>

            {/* Navigation buttons */}
            {currentImageIndex > 0 && (
              <button
                className={styles.navButton + " " + styles.navPrev}
                onClick={goToPrevImage}
              >
                ‹
              </button>
            )}

            {currentImageIndex < currentImages.length - 1 && (
              <button
                className={styles.navButton + " " + styles.navNext}
                onClick={goToNextImage}
              >
                ›
              </button>
            )}

            {/* Main image */}
            <div className={styles.lightboxImageContainer}>
              <img
                src={currentImages[currentImageIndex]?.src}
                alt="Gallery"
                className={styles.lightboxImage}
              />
            </div>

            {/* Image counter */}
            <div className={styles.lightboxCounter}>
              {currentImageIndex + 1} / {currentImages.length}
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Admission;
