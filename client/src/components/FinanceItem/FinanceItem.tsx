import React, { FC } from 'react';
import { StockData } from '../../types/IStockData';
import StockTicker from '../../types/tickers';
import { ArrowDown, ArrowUp } from '../../common/Arrows';

interface Props {
  item: StockData;
}

const FinanceItem: FC<Props> = ({ item }) => {
  const companyName = StockTicker[item.ticker] || item.ticker;
  const textColorClass = item.change_percent >= 1 ? 'text-green-600' : 'text-red-600';
  const arrowColor = item.change_percent >= 1 ? 'bg-green-100' : 'bg-red-100';

  const arrowIcon = item.change_percent >= 1 ? <ArrowUp/> : <ArrowDown/>;

  return (
    <div 
      data-testid="finance-item" 
      className="flex items-center text-center w-80 h-48 p-4 md:p-8 rounded-lg border border-gray-300 shadow-md"
    >
      <div className={`w-10 h-10 p-2 rounded-lg ${arrowColor} text-xl mr-2`}>
        {arrowIcon}
      </div>

      <div className="w-3/4">
        <p className="font-bold text-xl mb-2 md:text-2xl">{companyName}</p>
        <p className="text-gray-700 md:text-lg">Price: ${item.price}</p>
        <p className="text-gray-700 md:text-lg">
          Change: {item.change < 0 ? `-$${Math.abs(item.change)}` : `$${item.change}`}
        </p>
        <p className={`text-lg ${textColorClass} md:text-xl`}>
          Change Percent: {item.change_percent}%
        </p>
      </div>
    </div>
  );
}

export default FinanceItem;
