(function() {
  'use strict';

  // AngularJS E2E Testing Guide:
  // https://docs.angularjs.org/guide/e2e-testing

  describe('PhonecatApp Testing', function() {

    describe('PhoneList test', TestPhoneList1);

    describe('Probando ordenacion', TestPhoneList2);

    describe('Lista con css', TestPhoneList3);
    
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

    expect(phoneList.count()).toBe(5);

    query.sendKeys('nexus');
    expect(phoneList.count()).toBe(0);

    query.clear();
    query.sendKeys('motorola');
    expect(phoneList.count()).toBe(3);
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
      'Motorola XOOM\u2122 with Wi-Fi',
      'MOTOROLA XOOM\u2122'
    ]);

    nameOption.click();

    expect(getNames()).toEqual([      
      'MOTOROLA XOOM\u2122',
      'Motorola XOOM\u2122 with Wi-Fi'
    ]);
  }

  function TestPhoneList3() {
    beforeEach(function() {
      browser.get('index.html')
    });

    it('Comprobacion con css activo', TestAplicacionCss);

  }

  function TestAplicacionCss() {
    var query = element(by.model('$ctrl.query'));
    query.sendKeys('gem');

    element.all(by.css('.phones li a')).first().click();
    expect(browser.getCurrentUrl()).toContain('index.html#!/phones/samsung-gem');
  }

})();