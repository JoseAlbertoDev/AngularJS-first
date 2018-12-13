(function() {
  'use strict';

  // AngularJS E2E Testing Guide:
  // https://docs.angularjs.org/guide/e2e-testing

  describe('PhonecatApp Testing', function() {

    describe('PhoneList test', TestPhoneList1);

    describe('Probando ordenacion', TestPhoneList2);
    
  });

  function TestPhoneList1() {
    beforeEach(function() {
      browser.get('index.html');
    });

    it('filtrando una lista', TestFiltradoLista);

  }

  function TestFiltradoLista() {
    var phoneList = element.all(by.repeater('phone in $ctrl.phones'));

    var query = element(by.model('$ctrl.query'));

    expect(phoneList.count()).toBe(3);

    query.sendKeys('Huawei');
    expect(phoneList.count()).toBe(1);

    query.clear();
    query.sendKeys('nokia');
    expect(phoneList.count()).toBe(1);
  }

  function TestPhoneList2() {
    beforeEach(function() {
      browser.get('index.html');
    });

    it ('Comprobando ordenación', TestOrdenacionLista);
  }

  function TestOrdenacionLista() {
    
    // Filtro
    var queryField = element(by.model('$ctrl.query'));
    // Order by
    var orderBy = element(by.model('$ctrl.orderProp'));
    //Selecionamos a ordenar por name
    var nameOption = orderBy.element(by.css('option[value="name"]'));
    // Guardamos todos los nombres de la lista phones.
    var phoneNameColumn = element.all(by.repeater('phone in $ctrl.phones').column('phone.name'));

    function getNames() {
      return phoneNameColumn.map(function(elem) {
        return elem.getText();
      });
    }
    // Esto debe devolver IPhone 9 y Nokia
    queryField.sendKeys('tablet');   // Let's narrow the dataset to make the assertions shorter

    expect(getNames()).toEqual([
      'Nokia 300',
      'IPhone 9'
    ]);

    nameOption.click();

    expect(getNames()).toEqual([      
      'IPhone 9',
      'Nokia 300'
    ]);
  }

})();