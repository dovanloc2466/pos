
import { currency } from 'libs/framework';
import * as moment from 'moment';
import React from 'react';
import { useReactToPrint } from 'react-to-print';
import styled from 'styled-components';

import { PrintOrder, Services } from '@/_shared/model';

const _PrintOrderView = styled.div`
  padding: 7.6px;
  font-family:'system-ui';
  display: none;
  @media print {
    display  : block;
  }
  .logo{
    margin:auto;
    width: 70%;
    img{
      width: 100%;
      margin: auto;
      height: auto;
    }
  }
  .info{
    text-align: center;
    .salon{
      color : #000000;
      font-weight : 500;
      font-size : 15px;
      text-transform: uppercase;
      padding-bottom: 20px;
    }
    .address{
      color : #000000;
       font-weight: 100;

      span{
        font-size: 10px;
        font-weight:400;
        padding-bottom:10px;
      }
      div{
        font-size: 10px;
        font-weight:400;
      }
      .curator{
          font-size:25px;
          text-transform: uppercase;
          font-weight:500;
          padding-bottom: 20px;
          padding-top: 20px;
        }
    }
    .date-booking{
      display: flex; 
      justify-content: space-between;
      font-size: 10px;
      color : #000000;
      div{
        font-weight:400;
        .date{
          font-weight:400;
          padding-left:2px;
          font-size:18px;
        }
        .hour {
          font-weight:400;
          padding-left:2px;
          font-size:18px;
        }
      }
      
     
    }
  }
  .service-booking{
    padding: 10px 0;
    .waraper-service{
      margin: 5px 0;
      padding: 10px 0;
      border : 1px solid  #000000;
      .name-service{
        text-transform : uppercase;
        color : #000000;
        font-weight : 400;
        font-size : 20px;
      }
      .price-service{
        color : #000000;
        font-weight : 700;
        font-size : 20px;
      }
    }
  }
  .thank-you{
    color : #000000;
    font-weight: 400;
    font-size : 10px;
    padding-bottom: 10px;
  }
`;
export interface IDefaultViewProps {
  print?: PrintOrder;
  service?: Services[];
}

export const PrintOrderView = (props: React.PropsWithChildren<IDefaultViewProps>) => {
  const { print, service } = props;

  const componentRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  React.useEffect(
    () => {
      if (service) {
        if (handlePrint) {
          handlePrint();
        }
      }
    },
    [service]
  );

  return (
    <_PrintOrderView ref={componentRef}>
      <section style={{ margin: 'auto', fontSize: 'arial, sans-serif' }}>
        <section className='logo'>
          <img
            src={'/static/LOGO3MAN.png'}
          />
        </section>
        <p style={{ margin: 0, padding: 0, textAlign: 'center', fontSize: 16, fontWeight: 600, color: 'black' }}> COMBO 10 BƯỚC 100K</p>
        <section className='info'>
          <div className='address'>
            <span>{print?.address}</span>
            <br></br>
            <div style={{ paddingBottom: 15, paddingTop: 15 }}>
              <strong className='curator'>{print?.curator ? print?.curator : 'KHÁCH LẺ'}</strong>
              <br></br>
              <span style={{ fontSize: 18, fontWeight: 100 }}>{print?.code}</span>
            </div>
          </div>
          <div className='date-booking'>
            <div>Giờ:<span className='hour'>{moment(print?.date).format('HH:mm')}</span></div>
            <div>Ngày:<span className='date'>{moment(print?.date).format('DD/MM/YYYY')}</span> </div>
          </div>
          <div className='service-booking'>
            {
              service?.map((item, index) => {
                return (
                  <div key={index} className='waraper-service'>
                    <div className='name-service'>
                      {item.name}
                    </div>
                    <div className='price-service'>
                      {currency(Number(item.price))}
                    </div>
                  </div>
                );
              })
            }
          </div>
          <div style={{ paddingTop: 10 }}>
            <p className='thank-you'>
              Cảm ơn quý khách và hẹn gặp lại.
              <br></br>
               Đặt lịch:<span>https://3man.vn/booking</span>
              <br></br>
              Hotline phản ánh dịch vụ: <strong style={{ fontWeight: 400 }} >{print?.phone}</strong>
            </p>

            <p style={{ fontSize: 14, color: '#000000', fontWeight: 400, margin: 0 }}>LIKE & INBOX HỘP THƯ</p>

            <p style={{ color: '#000000', fontSize: 10, fontWeight: 400, margin: 0 }}>
              Khách hàng cập nhật chương trình ưu đãi
              <br></br>
              hàng tháng trong Messenger
              <br></br>
              Fanpage: 3Man 30Shine Tam Kỳ - 82 Phan Châu Trinh
            </p>
          </div>

        </section>
      </section>
    </_PrintOrderView>
  );
};