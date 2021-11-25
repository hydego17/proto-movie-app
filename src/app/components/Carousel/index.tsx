import { useCallback } from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel, { Props } from 'react-alice-carousel';
import styled from '@emotion/styled';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

interface CarouselProps extends Props {}

export const Carousel = ({ items, ...props }: CarouselProps) => {
  const renderPrevButton = useCallback(
    ({ isDisabled }: { isDisabled: any }) => {
      return (
        <div
          role="button"
          className="carousel__arrow"
          style={{ opacity: isDisabled ? 0 : 1 }}
        >
          <span>
            <HiOutlineChevronLeft />
          </span>
        </div>
      );
    },
    []
  );

  const renderNextButton = useCallback(
    ({ isDisabled }: { isDisabled: any }) => {
      return (
        <div
          role="button"
          className="carousel__arrow"
          style={{ opacity: isDisabled ? 0 : 1 }}
        >
          <span>
            <HiOutlineChevronRight />
          </span>
        </div>
      );
    },
    []
  );

  return (
    <CarouselStyled>
      <AliceCarousel
        items={items}
        mouseTracking
        animationDuration={750}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        {...props}
      />
    </CarouselStyled>
  );
};

const CarouselStyled = styled.div`
  .alice-carousel {
    & > div:first-of-type {
      .alice-carousel__wrapper {
      }
    }

    .alice-carousel__dots-item:not(.__custom):hover,
    .alice-carousel__dots-item:not(.__custom).__active {
      background-color: #e79d12;
    }

    .alice-carousel__prev-btn,
    .alice-carousel__next-btn {
      position: absolute;
      top: calc(50% - 22.5px);
      width: auto;
      text-align: unset;
      padding: 0;

      @media screen and (max-width: 600px) {
        display: none;
      }
    }

    .alice-carousel__prev-btn {
      left: -1rem;
    }

    .alice-carousel__next-btn {
      right: -1rem;
    }

    .carousel__arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      border-radius: 3rem;
      background: white;
      text-align: center;
      cursor: pointer;
      pointer-events: auto;
      transition: all 0.3s ease;
      -webkit-tap-highlight-color: transparent;
      border: 1.5px solid #e9edf4;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08);

      svg {
        color: #818181;
        width: 1.5rem;
        height: 1.5rem;
        transition: all 0.3s ease;
      }

      &:hover {
        opacity: 1;
        border-color: var(--main-color);
        box-shadow: 0 0 0 1px var(--main-color);
        text-decoration: none;

        svg {
          color: var(--main-color);
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
`;
