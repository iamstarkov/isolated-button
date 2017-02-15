# Button

## onClick

```
<Button variant="primary" onClick={() => { alert('YOLO') }}>alert('YOLO')</Button>
```

## icon

```
<Button variant="primary" icon>icon button</Button>
```

## Variants

```
<div>
  <Button variant="primary">Primary</Button>
  {'    '}
  <Button variant="secondary">Secondary</Button>
  {'    '}
  <Button variant="success">Success</Button>
  {'    '}
  <Button variant="info">Info</Button>
  {'    '}
  <Button variant="warning">Warning</Button>
  {'    '}
  <Button variant="danger">Danger</Button>
  {'    '}
  <Button variant="link">Link</Button>
</div>
```

## Tags

```
<div>
  <Button tag="a" variant="primary" href="#"> Link </Button>
  {'    '}
  <Button tag="button" variant="primary" type="submit"> Button </Button>
  {'    '}
  <Button tag="input" variant="primary" type="button"> Input </Button>
  {'    '}
  <Button tag="input" variant="primary" type="submit"> Submit </Button>
  {'    '}
  <Button tag="input" variant="primary" type="reset"> Reset </Button>
</div>
```

## Outline

```
<div>
  <Button outline variant="primary">Primary</Button>
  {'    '}
  <Button outline variant="secondary">Secondary</Button>
  {'    '}
  <Button outline variant="success">Success</Button>
  {'    '}
  <Button outline variant="info">Info</Button>
  {'    '}
  <Button outline variant="warning">Warning</Button>
  {'    '}
  <Button outline variant="danger">Danger</Button>
  {'    '}
  <Button outline variant="link">Link</Button>
</div>
```

## Size

```
<div>
  <Button size="s" variant="primary">Small button</Button>
  {'    '}
  <Button size="m" variant="primary">Medium button (normal)</Button>
  {'    '}
  <Button size="l" variant="primary">Large button</Button>
</div>
```

## Block

```
<div>
  <Button block variant="primary" size="l">Block level button</Button>
  {'    '}
  <Button block variant="secondary" size="l">Block level button</Button>
</div>
```

## Active / Disabled

```
<div>
  <Button active variant="primary" size="l">Active</Button>
  {'  '}
  <Button disabled variant="primary" size="l">Disabled</Button>
</div>
```
