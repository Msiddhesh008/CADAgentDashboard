import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineAppstore } from 'react-icons/ai';
import { FaTasks, FaWpforms } from 'react-icons/fa';
import { LuContact } from 'react-icons/lu';
import { BsChatSquareText } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { motion, useAnimation } from 'framer-motion';

const Accordion = ({
  iconName,
  size,
  title,
  dropLinks
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();


  const iconComponents = {
    AiOutlineAppstore: AiOutlineAppstore,
    FaTasks: FaTasks,
    FaWpforms: FaWpforms,
    LuContact: LuContact,
    BsChatSquareText: BsChatSquareText,
    FiSettings: FiSettings,
  };

  const IconComponent = iconComponents[iconName];

  if (!IconComponent) {
    return <div>Invalid Icon</div>;
  }

  const toggleAccordion = async () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      await controls.start({ height: 'auto' });
    } else {
      await controls.start({ height: 0 });
    }
  };

  return (
    <motion.div
      className="d-flex flex-column gap-1"
      initial={{ height: 0 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <div onClick={toggleAccordion} className="slidebtn ps-3 d-flex align-items-center justify-content-start">
        <IconComponent size={size} className="icons" />
        <span className="p-2 fs-6">{title}</span>
        {isVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </div>

      <div
        style={{
          overflow: 'hidden',
        }}
      >
        {dropLinks.map((item, index) => (
          <NavLink
            key={index}
            style={{
              textDecoration: 'none',
            }}
            to={item.path}
            className="p-2 slidebtn mb-1 ps-4 d-flex align-items-center justify-content-start"
          >
            <span style={{ fontSize: '15px' }}>{item.subTitle}</span>
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
};

export default Accordion;
