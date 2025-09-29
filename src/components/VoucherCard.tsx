import React from 'react';
import { QrCode, Download, Mail, Phone } from 'lucide-react';

interface Voucher {
  bookingId: string;
  hotelName: string;
  checkIn: string;
  checkOut: string;
  guestName: string;
  qrCode: string;
  confirmationSent: boolean;
}

interface VoucherCardProps {
  voucher: Voucher;
}

const VoucherCard: React.FC<VoucherCardProps> = ({ voucher }) => {
  return (
    <div className="neu-card p-8 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
      <div className="text-center mb-6">
        <div className="neu-circle w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
          <span className="text-2xl text-white">✅</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Rescue Booking Confirmed!</h2>
        <p className="text-gray-600">Your safety net is activated</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="neu-inset p-4 rounded-xl">
            <h3 className="font-semibold text-gray-800 mb-2">Booking Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Booking ID:</span>
                <span className="font-mono font-medium">{voucher.bookingId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Hotel:</span>
                <span className="font-medium">{voucher.hotelName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Guest:</span>
                <span className="font-medium">{voucher.guestName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Check-in:</span>
                <span className="font-medium">{voucher.checkIn}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Check-out:</span>
                <span className="font-medium">{voucher.checkOut}</span>
              </div>
            </div>
          </div>
          
          {voucher.confirmationSent && (
            <div className="neu-inset p-4 rounded-xl bg-blue-50">
              <div className="flex items-center space-x-2 mb-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">Confirmation Sent</span>
              </div>
              <p className="text-xs text-blue-600">
                Email confirmation with voucher details sent to your registered email address.
              </p>
            </div>
          )}
        </div>

        <div className="text-center">
          <div className="neu-inset p-6 rounded-2xl inline-block bg-white">
            <QrCode className="w-24 h-24 mx-auto text-gray-800 mb-3" />
            <p className="text-xs text-gray-600 mb-4">Show this QR code at hotel check-in</p>
            <div className="text-xs font-mono bg-gray-100 p-2 rounded">{voucher.qrCode}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <button className="neu-button px-6 py-3 rounded-xl flex items-center justify-center space-x-2 font-medium">
          <Download className="h-4 w-4" />
          <span>Download Voucher</span>
        </button>
        <button className="neu-button px-6 py-3 rounded-xl flex items-center justify-center space-x-2 font-medium">
          <Phone className="h-4 w-4" />
          <span>Call Hotel</span>
        </button>
      </div>

      <div className="mt-6 p-4 neu-inset rounded-xl bg-yellow-50">
        <h4 className="font-semibold text-yellow-800 mb-2">💡 Next Steps</h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• Keep this voucher saved on your device</li>
          <li>• Check your email for detailed confirmation</li>
          <li>• Contact hotel directly if flight is delayed further</li>
          <li>• Our AI assistant is monitoring for updates</li>
        </ul>
      </div>
    </div>
  );
};

export default VoucherCard;