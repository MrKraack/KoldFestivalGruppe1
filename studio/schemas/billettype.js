export default {
    name: 'billetType',
    title: 'Billet Type',
    type: 'document',
    fields: [
      {
        name: 'dayName',
        title: 'Day Name',
        type: 'string',
        options: {
            list: ["FREDAG", "LØRDAG", "PARTOUT"]
        }
      },
      {
        name: 'ticketpriceDiscount',
        title: 'Ticket Price Discounted',
        type: 'string',
      },
      {
        name: 'ticketpriceNormal',
        title: 'Ticket Price Normal',
        type: 'string',
      }
    ]
}