import React from 'react';
import { useTypedSelector } from '../../hooks/redux';

export default function Modal (): JSX.Element | null {
  const display = useTypedSelector(state => state.modal.display);
  const Current = useTypedSelector(state => state.modal.Current);

  return (
    display && Current && (
      <div className='fixed h-0 w-0'>
        <div className='fixed inset-0 h-screen w-screen bg-black opacity-70 flex items-center justify-center'>
          <div className='h-2/3 bg-gray-700 w-2/3 rounded-2xl flex items-center justify-center'>
            <Current />
          </div>
        </div>
      </div>
    )
  ) || null;
}
